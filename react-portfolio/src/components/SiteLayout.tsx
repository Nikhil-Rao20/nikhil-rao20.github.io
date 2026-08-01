import type { PropsWithChildren } from 'react';

const navItems = [
  ['about', 'About', 'index.html'],
  ['research', 'Research', 'research.html'],
  ['experiences', 'Experience', 'experiences.html'],
  ['vitae', 'CV', '/assets/Nikhil_Rao_CV.pdf'],
  ['projects', 'Projects', 'projects.html'],
] as const;

export function SiteLayout({ children, route }: PropsWithChildren<{ route: string }>) {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#portfolio-nav" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand montserrat dark-blue" href="#/index.html">Nikhileswara Rao Sulake</a>
          </div>
          <div className="collapse navbar-collapse" id="portfolio-nav">
            <ul className="nav navbar-nav navbar-right">
              {navItems.map(([id, label, href]) => {
                const active = href === route || (id === 'about' && route === 'index.html');
                return (
                  <li key={id} id={id} className={active ? 'active' : undefined}>
                    <a className={`montserrat${active ? ' hvr-bubble-bottom' : ''}`} href={href.startsWith('/') ? href : `#/${href}`} target={id === 'vitae' ? '_blank' : undefined}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer className="footer">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-sm-6 col-xs-12 text-muted footer-copy"><p>© 2026 Nikhileswara Rao Sulake</p></div>
            <div className="col-sm-6 col-xs-12 footer-social">
              <ul className="social-icons pull-right">
                <li><a href="https://x.com/s_rao80798" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x" /></a></li>
                <li><a href="https://scholar.google.com/citations?user=zE6f8d8AAAAJ&hl=en" target="_blank" rel="noreferrer"><i className="ai ai-google-scholar-square ai-2x" /></a></li>
                <li><a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-2x" /></a></li>
                <li><a href="https://github.com/Nikhil-Rao20" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
