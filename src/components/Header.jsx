import { useEffect, useState } from 'react';
import './Header.css';
import figmaIcon from '../assets/react.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="left-section">
          <img src={figmaIcon} alt="Figma Icon" className="figma-icon" />
        </div>
        <div className="right-section">
          <ul className="nav-links">
            <li>Inicio</li>
            <li>Importancia ODS9</li>
            <li>Como contribuir</li>
            <li>Testimonios</li>
            <li>Nosotros</li>
            <li>Blog</li>
          </ul>
          <div className="auth-buttons">
            <button>Log in</button>
            <button>Registro</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
