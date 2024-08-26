import { useState, useEffect, useContext } from "react";
import "./styles/Header.css";
import logo from "../../assets/Layout/Header/logo.png";
import navBarLinks from "./utils/Header";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState(null);
  const { logout } = useContext(AuthContext); // Obtener la función de logout del contexto

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = decodeToken(token);
      const parseUserName = decodedToken.name.split(" ")[0];
      const firstNameUpperCase =
        parseUserName.charAt(0).toUpperCase() + parseUserName.slice(1);
      setUserName(firstNameUpperCase);
    }
  }, []);

  const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = decodeURIComponent(atob(base64Url).replace(/\+/g, " "));
      const parsedToken = JSON.parse(base64);
      return parsedToken;
    } catch (e) {
      console.error("Failed to decode token", e);
      return {};
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="left-section">
          <Link to="/Inicio">
            <img src={logo} alt="Logo ODS9" className="figma-icon" />
          </Link>
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
            {navBarLinks.map((link, index) => (
              <Link className="no-decoration" to={link.path} key={index}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
          <div className={`auth-buttons ${isMenuOpen ? "open" : ""}`}>
            {userName ? (
              <>
                <div className="welcome-message">
                  <p className="logedin-username">Bienvenido, {userName}!</p>
                </div>
                <button className="auth-button logout-button" onClick={logout}>
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="auth-button login">Log in</button>
                </Link>
                <Link to="/registro">
                  <button className="auth-button register">Registro</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
