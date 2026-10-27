
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";
import "./ContactForm.css";

const serviceOptions = [
  "Logistics & Delivery",
  "Parcel Delivery",
  "Errand Services",
  "Storage & Handling",
  "Business Logistics",
  "Pickup & Drop-off",
  "Other Enquiry",
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    setSubmitted(true);
    setError("");
  }

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
    });

    setSubmitted(false);
    setError("");
  }

  if (submitted) {
    return (
      <div className="contact-success" role="status">
        <div className="contact-success-icon">
          <CheckCircle2 size={34} />
        </div>

        <span className="contact-form-eyebrow">Form completed</span>

        <h3>Thank you, {formData.name.trim()}!</h3>

        <p>
          Your enquiry has been completed in this demo. It has not been
          sent to Kings Errands & Logistics yet.
        </p>

        <button
          type="button"
          className="contact-reset-button"
          onClick={resetForm}
        >
          Send another enquiry <ArrowRight size={17} />
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span className="contact-form-eyebrow">GET IN TOUCH</span>
        <h3>Tell us what you need</h3>
        <p>
          Share a few details about your request and the service you
          are interested in.
        </p>
      </div>

      {error && (
        <div className="contact-form-error" role="alert">
          {error}
        </div>
      )}

      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="contact-name">Full name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-email">Email address *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-phone">Phone number</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="contact-service">Service required *</label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="contact-field contact-field-full">
          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="What is your enquiry about?"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="contact-field contact-field-full">
          <label htmlFor="contact-message">Your message *</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell us about your delivery or enquiry..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <p className="contact-form-note">
        * Required fields
      </p>

      <button className="contact-submit-button" type="submit">
        <Send size={17} />
        Submit enquiry
        <ArrowRight size={18} />
      </button>

      <p className="contact-form-disclaimer">
        Demo form only. Connecting a backend or messaging service is
        required to receive enquiries.
      </p>
    </form>
  );
}

export default ContactForm;
