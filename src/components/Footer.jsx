import "./Footer.css";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import logo from "../assets/react.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section logo-social">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <p>ODS 9: Industria, Innovación e Infraestructura</p>
        <div className="social-icons">
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
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
