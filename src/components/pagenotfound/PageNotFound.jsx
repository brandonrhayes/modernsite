import { useEffect, useState } from 'react';
import './pagenotfound.scss';
import SAFARI_ME from '../../assets/images/Safari Brandon.png';

const PageNotFound = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
    <div className="page-notfound-wrapper">
      <div className="notfound-content">
        <h1>404</h1>
        <h3>This page is missing in action</h3>
        <h4>It's okay. Every explorer gets lost sometimes...</h4>
        <br />
        <a href="/" className="btn btn-primary">
          Guide Me Home
        </a>
      </div>
      
    </div>
        <img
        src={SAFARI_ME}
        alt="Logo"
        className="notfound-logo"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
    </div>
  );
};

export default PageNotFound;