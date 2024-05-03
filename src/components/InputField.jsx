import "../pages/ContactUsPage/index.css";

const InputField = ({ label, id, name }) => {
  return (
    <div className="input-container mb-4">
      <input type="text" id={id} name={name} required />
      <label htmlFor={name} className="input-label">
        {label}
      </label>
    </div>
  );
};

InputField.propTypes = {
  label: String,
  id: String,
  name: String,
};

export default InputField;
