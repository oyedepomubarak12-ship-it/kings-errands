
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Package,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Partnerships.css";

const partnerTypes = [
  {
    icon: ShoppingBag,
    title: "Online Stores",
    description:
      "Discuss delivery arrangements for customer orders and products sold online.",
  },
  {
    icon: Store,
    title: "Retail Businesses",
    description:
      "Explore support for moving goods, documents, and supplies between locations.",
  },
  {
    icon: Building2,
    title: "Corporate Teams",
    description:
      "Discuss business delivery requirements, recurring needs, and logistics planning.",
  },
  {
    icon: Package,
    title: "Growing Businesses",
    description:
      "Start a conversation about logistics support as your business develops.",
  },
];

const steps = [
  {
    number: "01",
    title: "Introduce your business",
    description:
      "Tell us what your company does and the kind of logistics support you need.",
  },
  {
    number: "02",
    title: "Share your requirements",
    description:
      "Explain your delivery locations, estimated volume, and preferred schedule.",
  },
  {
    number: "03",
    title: "Discuss the next steps",
    description:
      "Submit your enquiry to begin discussing suitable arrangements and pricing.",
  },
];

export default function Partnerships() {
  return (
    <main className="partnerships-page">
      <section className="partnerships-hero">
        <div className="partnerships-container partnerships-hero-grid">
          <div className="partnerships-hero-copy">
            <span className="partnerships-eyebrow">
              <Handshake size={17} />
              BUSINESS PARTNERSHIPS
            </span>

            <h1>
              Let's move
              <span> business forward together.</span>
            </h1>

            <p>
              We welcome conversations with businesses looking for delivery
              and logistics support. Tell us about your operations and let's
              discuss how we may work together.
            </p>

            <div className="partnerships-actions">
              <Link
                to="/request-quote?service=Business%20Logistics"
                className="partnerships-btn partnerships-btn-primary"
              >
                Discuss a Partnership <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="partnerships-secondary-link">
                Contact Us
              </Link>
            </div>

            <div className="partnerships-trust-line">
              <CheckCircle2 size={18} />
              <span>Start with a conversation about your business needs.</span>
            </div>
          </div>

          <div className="partnerships-hero-art">
            <div className="partnerships-art-circle circle-large" />
            <div className="partnerships-art-circle circle-small" />

            <div className="partnerships-main-card">
              <div className="partnerships-main-icon">
                <Handshake size={42} />
              </div>

              <span>WORKING TOGETHER</span>
              <h2>Better coordination starts with a conversation.</h2>
              <p>
                Share your goals, delivery needs, and the kind of support
                you're looking for.
              </p>

              <div className="partnerships-card-bottom">
                <div className="partnerships-mini-icon">
                  <Truck size={20} />
                </div>
                <div>
                  <strong>Logistics enquiries</strong>
                  <small>For business requirements</small>
                </div>
              </div>
            </div>

            <div className="partnerships-floating-icon floating-handshake">
              <Handshake size={22} />
            </div>

            <div className="partnerships-floating-icon floating-package">
              <Package size={22} />
            </div>
          </div>
        </div>
      </section>

      <section className="partnerships-container partnerships-types-section">
        <div className="partnerships-section-heading">
          <span className="partnerships-eyebrow">WHO CAN ENQUIRE?</span>
          <h2>Partnership conversations for different businesses</h2>
          <p>
            If your business has delivery or logistics requirements, tell us
            what you need and we can discuss the possibilities.
          </p>
        </div>

        <div className="partnerships-types-grid">
          {partnerTypes.map((partner) => {
            const Icon = partner.icon;

            return (
              <article className="partnerships-type-card" key={partner.title}>
                <div className="partnerships-type-icon">
                  <Icon size={25} />
                </div>

                <h3>{partner.title}</h3>
                <p>{partner.description}</p>

                <Link
                  to="/request-quote?service=Business%20Logistics"
                  className="partnerships-card-link"
                >
                  Make an enquiry <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="partnerships-process-section">
        <div className="partnerships-container">
          <div className="partnerships-section-heading">
            <span className="partnerships-eyebrow">OUR APPROACH</span>
            <h2>From first contact to a clear plan</h2>
            <p>
              Every potential partnership starts by understanding the
              business and its requirements.
            </p>
          </div>

          <div className="partnerships-steps-grid">
            {steps.map((step) => (
              <article className="partnerships-step" key={step.number}>
                <span className="partnerships-step-number">
                  {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partnerships-container partnerships-final-cta">
        <div className="partnerships-final-icon">
          <Handshake size={30} />
        </div>

        <div className="partnerships-final-copy">
          <span className="partnerships-eyebrow">LET'S CONNECT</span>
          <h2>Have a business proposal in mind?</h2>
          <p>
            Tell us about your company and the logistics support you're
            looking for.
          </p>
        </div>

        <Link
          to="/request-quote?service=Business%20Logistics"
          className="partnerships-btn partnerships-btn-primary"
        >
          Start an Enquiry <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
