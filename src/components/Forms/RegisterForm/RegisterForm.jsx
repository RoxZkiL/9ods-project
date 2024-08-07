import "../styles/FormStyles.css";
import FormInput from "../FormInput";
import FormHeader from "../FormHeader";
import FormButton from "../FormButton";

const RegisterForm = () => {
  return (
    <div className="outer-container">
      <div className="background-image"></div>
      <div className="inner-container">
        <div className="form-wrapper">
          <FormHeader title="Crea tu cuenta" />
          <form className="registration-form">
            <FormInput type="text" placeholder="Ingresa tu nombre..." />
            <FormInput type="email" placeholder="Ingresa tu email..." />
            <FormInput type="email" placeholder="Confirma tu email..." />
            <FormInput type="password" placeholder="Ingresa tu contraseña..." />
            <FormInput
              type="password"
              placeholder="Confirma tu contraseña..."
            />
            <FormButton text="Crear Cuenta" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
