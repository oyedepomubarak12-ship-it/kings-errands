
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setForm(initialForm);
    setSubmitted(false);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h1>Let’s talk about your logistics needs.</h1>
          <p>
            Have a question about deliveries, errands, or business logistics?
            Send us an enquiry using the form below.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container contact-layout">
          <div className="contact-information">
            <span className="contact-eyebrow">CONTACT INFORMATION</span>
            <h2>How can we help?</h2>
            <p className="contact-information-description">
              Tell us what you need and provide enough detail for the team to
              understand your enquiry.
            </p>

            <div className="contact-information-card">
              <span className="contact-information-icon">
                <MessageSquare size={21} />
              </span>
              <div>
                <h3>General enquiries</h3>
                <p>Questions about services, delivery arrangements, or quotes.</p>
                <Link to="/request-quote">
                  Request a quote <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="contact-information-card">
              <span className="contact-information-icon">
                <PackageIcon />
              </span>
              <div>
                <h3>Delivery tracking</h3>
                <p>Visit the tracking page to try the demonstration lookup.</p>
                <Link to="/track-delivery">
                  Track a delivery <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="contact-information-card">
              <span className="contact-information-icon">
                <Clock3 size={21} />
              </span>
              <div>
                <h3>Availability and response</h3>
                <p>
                  Response times and service availability need confirmation
                  from the business team.
                </p>
              </div>
            </div>

            <div className="contact-information-note">
              <MapPin size={18} />
              <p>
                Contact details and operating hours can be added here when
                the business provides its official information.
              </p>
            </div>
          </div>

          <div className="contact-form-panel">
            {submitted ? (
              <div className="contact-success" role="status" aria-live="polite">
                <span className="contact-success-icon">
                  <CheckCircle2 size={38} />
                </span>
                <span className="contact-eyebrow">DEMO CONFIRMATION</span>
                <h2>Thank you, {form.name}.</h2>
                <p>
                  Your message has passed the form validation. It has not been
                  sent to the business because the backend is not connected yet.
                </p>

                <div className="contact-success-summary">
                  <span>Subject</span>
                  <strong>{form.subject}</strong>
                  <span>Your message</span>
                  <p>{form.message}</p>
                </div>

                <button
                  type="button"
                  className="contact-submit-button"
                  onClick={resetForm}
                >
                  Write another message <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-heading">
                  <h2>Send us a message</h2>
                  <p>Complete the fields below to prepare your enquiry.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-fields">
                    <div className="contact-field">
                      <label htmlFor="contact-name">Full name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={form.name}
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
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="contact-field contact-field-full">
                      <label htmlFor="contact-phone">
                        Phone number (optional)
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Your phone number"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-field contact-field-full">
                      <label htmlFor="contact-subject">Subject *</label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select an enquiry type</option>
                        <option value="General enquiry">General enquiry</option>
                        <option value="Delivery enquiry">Delivery enquiry</option>
                        <option value="Business logistics">
                          Business logistics
                        </option>
                        <option value="Partnership">Partnership</option>
                        <option value="Technical support">
                          Technical support
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="contact-field contact-field-full">
                      <label htmlFor="contact-message">Your message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="5"
                        maxLength={1500}
                        placeholder="Tell us how we can help..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                      <span className="contact-character-count">
                        {form.message.length}/1500 characters
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit-button"
                  >
                    Review Message <ArrowRight size={18} />
                  </button>

                  <p className="contact-form-disclaimer">
                    Demo only. Your message will not be sent or stored.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="contact-container contact-bottom-inner">
          <div>
            <span className="contact-eyebrow">NEED A DELIVERY QUOTE?</span>
            <h2>Tell us about your delivery requirements.</h2>
          </div>
          <Link to="/request-quote">
            Request a quote <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function PackageIcon() {
  return <Mail size={21} />;
}
