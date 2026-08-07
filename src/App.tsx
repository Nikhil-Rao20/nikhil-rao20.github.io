import { useEffect, useState, useRef } from 'react';
import { PageRenderer, usePageHead, usePageInteractions, usePageScripts } from './components/PageRenderer';
import { pageByRoute } from './generated/pages';
import { SiteLayout } from './components/SiteLayout';
import { ScrollToTop } from './components/ScrollToTop';

import { lazy, Suspense } from 'react';
import Loader from './components/kokonutui/loader';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Research = lazy(() => import('./pages/Research').then(m => ({ default: m.Research })));
const Experiences = lazy(() => import('./pages/Experiences').then(m => ({ default: m.Experiences })));
const Projects = lazy(() => import('./pages/Projects').then(m => ({ default: m.Projects })));
const PrevProjects = lazy(() => import('./pages/PrevProjects').then(m => ({ default: m.PrevProjects })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const CV = lazy(() => import('./pages/CV').then(m => ({ default: m.CV })));

const defaultRoute = 'index.html';

function readRoute() {
  const requested = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''));
  return requested || defaultRoute;
}

// Pages with no counterpart in the migrated HTML have no entry in pageByRoute,
// so they get the site chrome without the generated-page lookup.
function StandalonePageWrapper({ route, title, children }: { route: string; title: string; children: React.ReactNode }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <SiteLayout route={route}>
      <main>
        <div className="page-content">
          <Suspense fallback={<Loader className="h-[60vh] w-full" />}>{children}</Suspense>
        </div>
      </main>
      <ScrollToTop />
    </SiteLayout>
  );
}

function MigratedPageWrapper({ route, children }: { route: string; children: React.ReactNode }) {
  const page = pageByRoute.get(route)!;
  const container = useRef<HTMLDivElement>(null);
  usePageHead(page);
  usePageInteractions(container, page.route);
  usePageScripts(page, container);

  const content = <div ref={container} className="page-content"><Suspense fallback={<Loader className="h-[60vh] w-full" />}>{children}</Suspense></div>;
  if (!page.portfolioChrome) return <main>{content}</main>;
  return <SiteLayout route={page.route}><main>{content}</main><ScrollToTop /></SiteLayout>;
}

export default function App() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const updateRoute = () => setRoute(readRoute());
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);

  switch (route) {
    case 'index.html': return <MigratedPageWrapper route={route}><Home /></MigratedPageWrapper>;
    case 'research.html': return <MigratedPageWrapper route={route}><Research /></MigratedPageWrapper>;
    case 'experiences.html': return <MigratedPageWrapper route={route}><Experiences /></MigratedPageWrapper>;
    case 'projects.html': return <MigratedPageWrapper route={route}><Projects /></MigratedPageWrapper>;
    case 'prev_projects.html': return <MigratedPageWrapper route={route}><PrevProjects /></MigratedPageWrapper>;
    case 'gallery.html': return <MigratedPageWrapper route={route}><Gallery /></MigratedPageWrapper>;
    case 'contact.html': return <MigratedPageWrapper route={route}><Contact /></MigratedPageWrapper>;
    case 'cv.html': return <StandalonePageWrapper route={route} title="CV — Nikhileswara Rao Sulake"><CV /></StandalonePageWrapper>;
    default: return <PageRenderer route={route} />;
  }
}
