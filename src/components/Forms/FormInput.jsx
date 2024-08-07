/* eslint-disable react/prop-types */
import "./styles/FormStyles.css";

const FormInput = ({ type, placeholder }) => {
  return (
    <div className="form-group">
      <input type={type} className="form-input" placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
