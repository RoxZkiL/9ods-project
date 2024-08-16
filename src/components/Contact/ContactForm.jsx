import "./Styles/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="formulario-wrapper">
      <h2>Contáctanos</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Desarrollo Sostenible</h3>
          <p>Grupo 2 - Counter Logic Coding</p>
          <p>Generation Chile, Innovación y Tecnología</p>
          <h3>Conéctate con Nosotros</h3>
          <div className="social-icons">
            <a href="https://x.com/CounterLogicCod" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=1A1A1A"
                alt="X"
                width="30"
                height="30"
              />
            </a>
            <a href="https://www.instagram.com/counterlogiccoding?igsh=MXZudjdiYXdwcHdrNA==" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=32292&format=png&color=1A1A1A"
                alt="Instagram"
                width="30"
                height="30"
              />
            </a>
            <a href="https://www.linkedin.com/company/counter-logic-coding/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=447&format=png&color=000000"
                alt="LinkedIn"
                width="30"
                height="30"
              />
            </a>
          </div>
          <p>© 2024 Counter Logic Coding</p>
          <p>Todos Los Derechos Reservados.</p>
        </div>
        <div className="contact-form">
          <form>
            <h3 className="contact-form-title">Formulario de Contacto</h3>
            <input type="text" placeholder="Ingresa tu Nombre" required />
            <input
              type="email"
              placeholder="Ingresa un correo válido"
              required
            />
            <textarea placeholder="Ingresa tu mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
