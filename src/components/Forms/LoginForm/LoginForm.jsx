import "../styles/FormStyles.css";
import FormInput from "../FormInput";
import FormHeader from "../FormHeader";
import FormButton from "../FormButton";

const LoginForm = () => {
  return (
    <div className="outer-container">
      <div className="background-image"></div>
      <div className="inner-container">
        <div className="form-wrapper">
          <FormHeader title="Inicia sesión" />
          <form className="registration-form">
            <FormInput type="email" placeholder="Email" />
            <FormInput type="password" placeholder="Contraseña" />
            <FormButton text="Iniciar Sesión" />
            <p className="password-recovery">
              <a href="#" style={{ textDecoration: "none" }}>
                ¿Olvisdaste tu contraseña?
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
