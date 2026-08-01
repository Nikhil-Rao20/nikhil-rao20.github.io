import type { PropsWithChildren } from 'react';
import { useTheme } from 'next-themes';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

const navItems = [
  ['about', 'About', 'index.html'],
  ['research', 'Research', 'research.html'],
  ['experiences', 'Experience', 'experiences.html'],
  ['vitae', 'CV', '/assets/Nikhil_Rao_CV.pdf'],
  ['projects', 'Projects', 'projects.html'],
] as const;

export function SiteLayout({ children, route }: PropsWithChildren<{ route: string }>) {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
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

              <li className="hidden-xs" style={{ display: 'flex', alignItems: 'center', height: '50px', paddingLeft: '15px' }}>
                <AnimatedThemeToggler
                  theme={(currentTheme || 'light') as "light" | "dark"}
                  onThemeChange={(t) => setTheme(t)}
                  className="w-9 h-9 rounded-full bg-[#f3f4f6] dark:bg-white flex items-center justify-center text-[#20364c] dark:text-black transition-colors border border-transparent dark:border-[#334155]"
                />
              </li>
              <li className="visible-xs" style={{ padding: '10px 15px' }}>
                <AnimatedThemeToggler
                  theme={(currentTheme || 'light') as "light" | "dark"}
                  onThemeChange={(t) => setTheme(t)}
                  className="w-9 h-9 rounded-full bg-[#f3f4f6] dark:bg-white flex items-center justify-center text-[#20364c] dark:text-black transition-colors border border-transparent dark:border-[#334155]"
                />
              </li>
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
