import { useCallback, useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

const CV_URL = '/assets/Nikhil_Rao_CV.pdf';
const GUTTER = 32;
const ZOOM_STEPS = [0.75, 1, 1.25, 1.5, 2] as const;

// Toolbar controls are plain buttons rather than ParticleButton, which renders
// an anchor. Tailwind preflight is off, so every button style is explicit.
const controlClass =
  'inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#d7dde5] ' +
  'bg-white text-[#20364c] transition-colors hover:border-[#1585cf] hover:text-[#1585cf] ' +
  'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#d7dde5] ' +
  'disabled:hover:text-[#20364c] dark:border-[#1f2937] dark:bg-[#0f172a] dark:text-[#e5e7eb] ' +
  'dark:hover:border-[#1585cf] dark:hover:text-[#1585cf] dark:disabled:hover:border-[#1f2937] ' +
  'dark:disabled:hover:text-[#e5e7eb]';

export function CV() {
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomIndex, setZoomIndex] = useState(1);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [viewportWidth, setViewportWidth] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const tasksRef = useRef<RenderTask[]>([]);

  const zoom = ZOOM_STEPS[zoomIndex];

  useEffect(() => {
    let cancelled = false;
    // pdf.js 6 has no PDFDocumentProxy.destroy(); tearing down the loading task
    // disposes the document and its worker, so cleanup below covers both paths.
    const loadingTask = pdfjsLib.getDocument({ url: CV_URL });
    loadingTask.promise.then(
      (loaded) => {
        if (cancelled) return;
        setDoc(loaded);
        setNumPages(loaded.numPages);
        setStatus('ready');
      },
      () => {
        if (!cancelled) setStatus('error');
      },
    );
    return () => {
      cancelled = true;
      void loadingTask.destroy();
    };
  }, []);

  // The fit-to-width scale is derived from the scroller, so the pages track the
  // container on resize instead of being pinned to a fixed scale.
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    setViewportWidth(element.clientWidth);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setViewportWidth(entry.contentRect.width);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [status]);

  useEffect(() => {
    if (!doc || viewportWidth === 0) return;
    let cancelled = false;

    const renderAll = async () => {
      for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber += 1) {
        if (cancelled) return;
        const page = await doc.getPage(pageNumber);
        if (cancelled) return;
        const canvas = canvasRefs.current[pageNumber - 1];
        if (!canvas) continue;

        // Render at device-pixel resolution and scale back down via CSS, so the
        // text stays sharp on high-DPI screens.
        const ratio = window.devicePixelRatio || 1;
        const unscaled = page.getViewport({ scale: 1 });
        const fitScale = (viewportWidth - GUTTER) / unscaled.width;
        const viewport = page.getViewport({ scale: fitScale * zoom * ratio });

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = `${Math.floor(viewport.width / ratio)}px`;
        canvas.style.height = `${Math.floor(viewport.height / ratio)}px`;

        const task = page.render({ canvas, viewport });
        tasksRef.current.push(task);
        try {
          await task.promise;
        } catch {
          // A cancelled render rejects; the effect cleanup owns that case.
          return;
        }
      }
    };
    void renderAll();

    return () => {
      cancelled = true;
      tasksRef.current.forEach((task) => task.cancel());
      tasksRef.current = [];
    };
  }, [doc, viewportWidth, zoom]);

  // Keep the page counter in step with scrolling.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root || numPages === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!mostVisible) return;
        const index = pageRefs.current.indexOf(mostVisible.target as HTMLDivElement);
        if (index >= 0) setCurrentPage(index + 1);
      },
      { root, threshold: [0.1, 0.35, 0.6, 0.9] },
    );
    pageRefs.current.slice(0, numPages).forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, [numPages]);

  const goToPage = useCallback((pageNumber: number) => {
    const target = pageRefs.current[pageNumber - 1];
    const root = scrollRef.current;
    if (!target || !root) return;
    root.scrollTo({ top: target.offsetTop - root.offsetTop - 12, behavior: 'smooth' });
    setCurrentPage(pageNumber);
  }, []);

  return (
    <>
      <div className="spacer-div-3 hidden-xs hidden-xs"></div>

      <div id="main-container" className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Curriculum Vitae</h1>
            <p>
              The full CV is below. You can also <a href={CV_URL} download>download the PDF</a> or{' '}
              <a href={CV_URL} target="_blank" rel="noopener">open it in a new tab</a>.
            </p>

            <div className="push-down-4 overflow-hidden rounded-lg border border-[#d7dde5] dark:border-[#1f2937]">
              <div className="flex flex-wrap items-center gap-3 border-b border-[#d7dde5] bg-[#f3f4f6] px-3 py-2 dark:border-[#1f2937] dark:bg-[#111827]">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className={controlClass}
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={status !== 'ready' || currentPage <= 1}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="montserrat min-w-[92px] text-center text-sm text-[#20364c] dark:text-[#e5e7eb]">
                    {status === 'ready' ? `Page ${currentPage} / ${numPages}` : 'Page — / —'}
                  </span>
                  <button
                    type="button"
                    className={controlClass}
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={status !== 'ready' || currentPage >= numPages}
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="ml-auto flex items-center gap-2">
                  <button
                    type="button"
                    className={controlClass}
                    onClick={() => setZoomIndex((index) => Math.max(0, index - 1))}
                    disabled={status !== 'ready' || zoomIndex === 0}
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="montserrat min-w-[52px] text-center text-sm text-[#20364c] dark:text-[#e5e7eb]">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    type="button"
                    className={controlClass}
                    onClick={() => setZoomIndex((index) => Math.min(ZOOM_STEPS.length - 1, index + 1))}
                    disabled={status !== 'ready' || zoomIndex === ZOOM_STEPS.length - 1}
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <a
                    href={CV_URL}
                    download
                    className="montserrat inline-flex h-9 items-center gap-2 rounded-md bg-[#1585cf] px-3 text-sm text-white transition-opacity hover:text-white hover:opacity-90 focus:text-white"
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </div>
              </div>

              <div
                ref={scrollRef}
                className="relative max-h-[80vh] overflow-y-auto bg-[#e9edf2] px-4 py-4 dark:bg-[#0b1220]"
              >
                {status === 'loading' && (
                  <p className="montserrat py-16 text-center text-sm text-[#20364c] dark:text-[#e5e7eb]">
                    Loading CV…
                  </p>
                )}

                {status === 'error' && (
                  <p className="montserrat py-16 text-center text-sm text-[#20364c] dark:text-[#e5e7eb]">
                    The CV could not be displayed here.{' '}
                    <a href={CV_URL} target="_blank" rel="noopener">Open the PDF directly</a>.
                  </p>
                )}

                {status === 'ready' &&
                  Array.from({ length: numPages }, (_, index) => (
                    <div
                      key={index}
                      ref={(element) => {
                        pageRefs.current[index] = element;
                      }}
                      className="mx-auto mb-4 w-fit bg-white shadow-md last:mb-0"
                    >
                      <canvas
                        ref={(element) => {
                          canvasRefs.current[index] = element;
                        }}
                        className="block"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
