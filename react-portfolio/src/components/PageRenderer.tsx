import { useEffect, useRef } from 'react';
import { pageByRoute, type MigratedPage } from '../generated/pages';
import { ScrollToTop } from './ScrollToTop';
import { SiteLayout } from './SiteLayout';

export function usePageHead(page: MigratedPage) {
  useEffect(() => {
    document.title = page.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description && page.description) description.content = page.description;

    const created = page.styles.map((css, index) => {
      const style = document.createElement('style');
      style.dataset.pageStyle = `${page.route}-${index}`;
      style.textContent = css;
      document.head.append(style);
      return style;
    });
    const links = page.styleSheets.filter((href) => !document.querySelector(`link[href="${href}"]`)).map((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.append(link);
      return link;
    });

    return () => {
      created.forEach((style) => style.remove());
      links.forEach((link) => link.remove());
    };
  }, [page]);
}

export function usePageInteractions(container: React.RefObject<HTMLDivElement | null>, route: string) {
  useEffect(() => {
    const root = container.current;
    if (!root) return;

    const setCategory = (tabs: string, items: string, category: string) => {
      root.querySelectorAll<HTMLElement>(items).forEach((item) => item.classList.toggle('show', item.dataset.category === category));
      root.querySelectorAll<HTMLElement>(tabs).forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === category));
    };
    if (route === 'gallery.html') setCategory('.gallery-tab', '.gallery-item', 'research');
    if (route === 'prev_projects.html') setCategory('.project-tab', '.project-card', 'research');

    const onClick = (event: MouseEvent) => {
      const galleryTab = (event.target as Element | null)?.closest<HTMLElement>('.gallery-tab');
      if (galleryTab?.dataset.tab) setCategory('.gallery-tab', '.gallery-item', galleryTab.dataset.tab);
      const projectTab = (event.target as Element | null)?.closest<HTMLElement>('.project-tab');
      if (projectTab?.dataset.tab) setCategory('.project-tab', '.project-card', projectTab.dataset.tab);
      const expander = (event.target as Element | null)?.closest<HTMLElement>('.expander');
      if (expander) {
        const shouldOpen = expander.textContent?.trim() === 'show all';
        expander.textContent = shouldOpen ? 'hide all' : 'show all';
        root.querySelectorAll<HTMLElement>('.panel-collapse').forEach((panel) => panel.classList.toggle('in', shouldOpen));
      }
      const more = (event.target as Element | null)?.closest<HTMLElement>('#badge-more');
      if (more) {
        const content = root.querySelector<HTMLElement>('#read-more');
        if (content) content.style.display = content.style.display === 'none' ? 'block' : 'none';
        more.textContent = more.textContent?.trim() === 'more' ? 'less' : 'more';
      }
    };
    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [container, route]);
}

export function usePageScripts(page: MigratedPage, container: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!container.current || page.scripts.length === 0) return;
    let cancelled = false;
    const mounted: HTMLScriptElement[] = [];

    const run = async () => {
      for (const source of page.scripts) {
        if (cancelled) return;
        const script = document.createElement('script');
        script.async = false;
        if (source.src) {
          script.src = source.src;
          await new Promise<void>((resolve) => {
            script.addEventListener('load', () => resolve(), { once: true });
            script.addEventListener('error', () => resolve(), { once: true });
            document.body.append(script);
            mounted.push(script);
          });
        } else if (source.code) {
          script.textContent = source.code;
          document.body.append(script);
          mounted.push(script);
        }
      }
    };
    void run();
    return () => {
      cancelled = true;
      mounted.forEach((script) => script.remove());
    };
  }, [container, page]);
}

export function PageRenderer({ route }: { route: string }) {
  const page = pageByRoute.get(route) ?? pageByRoute.get('index.html')!;
  const container = useRef<HTMLDivElement>(null);
  usePageHead(page);
  usePageInteractions(container, page.route);
  usePageScripts(page, container);
  const content = <div ref={container} dangerouslySetInnerHTML={{ __html: page.html }} />;

  if (!page.portfolioChrome) return <main>{content}</main>;
  return <SiteLayout route={page.route}><main>{content}</main><ScrollToTop /></SiteLayout>;
}
