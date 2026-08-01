import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;
  return <button type="button" id="topper" className="btn scroll-link" title="Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i className="fa fa-fw fa-2x fa-caret-up" aria-hidden="true" /></button>;
}
