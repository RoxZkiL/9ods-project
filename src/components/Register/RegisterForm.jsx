import "./styles/Register.css";
const RegisterForm = () => {
  return (
    <div className="outer-container">
      <div className="background-image"></div>
      <div className="inner-container">
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Crea tu cuenta</h2>
          </div>
          <form className="registration-form">
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Ingresa tu nombre..."
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Ingresa tu email..."
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                placeholder="Ingresa tu contraseña..."
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                placeholder="Confirma tu contraseña..."
              />
            </div>
            <div className="form-group form-button-container">
              <button type="submit" className="form-button">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
