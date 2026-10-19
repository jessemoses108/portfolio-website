// components/ContactForm/ContactForm.jsx
import { useState } from "react";
import "./ContactForm.css"
import FormField from "../FormField/FormField";
import Button from "../Button/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to a real service (Formspree, EmailJS, or your own API route)
    console.log("Form submitted:", formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="contact-form__title">Send me a message</h3>
      <div className="contact-form__fields">
        <FormField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Jesse"
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="yourname@example.com"
        />
        <FormField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          multiline
        />
      </div>
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
