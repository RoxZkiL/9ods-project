import "./Footer.css";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logotipo-blanco.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section logo-social">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <p>Industria, Innovación e Infraestructura</p>
        <div className="social-icons">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-section resources">
        <h4>Recursos</h4>
        <div className="resources-links">
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
          <a href="#">Sobre Nosotros</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
