// components/FormField/FormField.jsx
import "./FormField.css"

export default function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
}) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <div className="form-field">
      <label htmlFor={name} className="form-field__label">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={multiline ? undefined : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-field__input"
        rows={multiline ? 5 : undefined}
      />
    </div>
  );
}
