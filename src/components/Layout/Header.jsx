import { useState, useEffect } from "react";
import "./styles/Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="left-section">
          <img src={logo} alt="Figma Icon" className="figma-icon" />
        </div>
        <div className="right-section">
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Importancia</a>
            </li>
            <li>
              <a href="#">¿Cómo contribuir?</a>
            </li>
            <li>
              <a href="#">Testimonios</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          <div className={`auth-buttons ${isMenuOpen ? "open" : ""}`}>
            <button className="auth-button">Log in</button>
            <button className="auth-button">Registro</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
