
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  MapPin,
  Package,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import QuoteFormFields from "./QuoteFormFields";
import "./Quote.css";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  pickup: "",
  destination: "",
  packageDetails: "",
  deliveryDate: "",
  additionalNotes: "",
};

export default function Quote() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleReset() {
    setForm(initialForm);
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <main className="quote-page">
        <section className="quote-success">
          <div className="quote-success-icon">
            <CheckCircle2 size={42} />
          </div>

          <span className="quote-eyebrow">REQUEST PREPARED</span>
          <h1>Your quote request is ready.</h1>
          <p>
            Your details have been collected in this demo. They have not been
            sent to Kings Errands &amp; Logistics because the backend is not
            connected yet.
          </p>

          <div className="quote-summary">
            <h2>Request summary</h2>
            <div>
              <span>Name</span>
              <strong>{form.fullName}</strong>
            </div>
            <div>
              <span>Service</span>
              <strong>{form.service}</strong>
            </div>
            <div>
              <span>Collection</span>
              <strong>{form.pickup}</strong>
            </div>
            <div>
              <span>Destination</span>
              <strong>{form.destination}</strong>
            </div>
            {form.deliveryDate && (
              <div>
                <span>Preferred date</span>
                <strong>{form.deliveryDate}</strong>
              </div>
            )}
          </div>

          <div className="quote-success-actions">
            <button
              type="button"
              className="quote-button quote-button-primary"
              onClick={handleReset}
            >
              <RotateCcw size={17} />
              Prepare another request
            </button>
            <Link to="/" className="quote-button quote-button-secondary">
              <ArrowLeft size={17} />
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="quote-page">
      <section className="quote-hero">
        <div className="quote-container">
          <span className="quote-eyebrow">REQUEST A QUOTE</span>
          <h1>Tell us what you need delivered.</h1>
          <p>
            Share a few details about your delivery or errand so the
            appropriate service requirements can be reviewed.
          </p>
        </div>
      </section>

      <section className="quote-content">
        <div className="quote-container quote-layout">
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="quote-form-heading">
              <span className="quote-form-heading-icon">
                <ClipboardList size={22} />
              </span>
              <div>
                <h2>Your request details</h2>
                <p>Fields marked with * are required.</p>
              </div>
            </div>

            <QuoteFormFields form={form} onChange={handleChange} />

            <div className="quote-form-notice">
              <Package size={18} />
              <p>
                Please provide accurate details. Pricing, availability, and
                service arrangements would need to be confirmed by the team.
              </p>
            </div>

            <button
              type="submit"
              className="quote-button quote-button-primary quote-submit"
            >
              Review Request <ArrowRight size={18} />
            </button>

            <p className="quote-demo-note">
              Demo only: this form does not send or save your information.
            </p>
          </form>

          <aside className="quote-sidebar">
            <div className="quote-sidebar-icon">
              <MapPin size={25} />
            </div>
            <h2>Plan your delivery</h2>
            <p>
              Include clear collection and destination details to help explain
              your requirements.
            </p>

            <div className="quote-sidebar-step">
              <span>01</span>
              <div>
                <strong>Share your details</strong>
                <p>Tell us how to contact you.</p>
              </div>
            </div>

            <div className="quote-sidebar-step">
              <span>02</span>
              <div>
                <strong>Describe your request</strong>
                <p>Choose a service and provide locations.</p>
              </div>
            </div>

            <div className="quote-sidebar-step">
              <span>03</span>
              <div>
                <strong>Confirm arrangements</strong>
                <p>Availability and pricing need confirmation.</p>
              </div>
            </div>

            <div className="quote-sidebar-contact">
              Need help with your enquiry?
              <Link to="/contact">Visit the contact page</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
