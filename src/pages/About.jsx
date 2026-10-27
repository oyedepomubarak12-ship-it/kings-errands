
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Handshake,
  MapPin,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const values = [
  {
    icon: ShieldCheck,
    title: "Careful handling",
    description:
      "Every delivery request deserves attention to its instructions and package details.",
  },
  {
    icon: Clock3,
    title: "Clear communication",
    description:
      "Customers should be able to understand the next steps and ask questions when they need help.",
  },
  {
    icon: Handshake,
    title: "Customer-focused service",
    description:
      "We aim to make arranging a delivery or errand straightforward from the start.",
  },
  {
    icon: Package,
    title: "Practical solutions",
    description:
      "From individual parcels to business delivery needs, the right service starts with understanding the request.",
  },
];

const services = [
  {
    icon: Truck,
    title: "Logistics & delivery",
    description:
      "Delivery support for packages, goods, and other eligible items.",
  },
  {
    icon: Package,
    title: "Parcel delivery",
    description:
      "A convenient way to arrange parcel pickup and delivery.",
  },
  {
    icon: MapPin,
    title: "Errand services",
    description:
      "Assistance with eligible errands based on the request and service area.",
  },
  {
    icon: Handshake,
    title: "Business logistics",
    description:
      "Delivery support for businesses that need help coordinating their logistics requirements.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-container about-hero-grid">
          <div className="about-hero-copy">
            <span className="about-eyebrow">ABOUT KINGS ERRANDS</span>
            <h1>Making everyday logistics easier to arrange.</h1>
            <p>
              Kings Errands & Logistics is presented here as a delivery and
              errand service built around practical support, clear information,
              and customer needs.
            </p>

            <div className="about-hero-actions">
              <Link to="/services" className="about-primary-button">
                Explore services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="about-text-link">
                Talk to our team
              </Link>
            </div>

            <div className="about-promise">
              <CheckCircle2 size={19} />
              <span>Clear service information, from enquiry to delivery planning.</span>
            </div>
          </div>

          <div className="about-visual" aria-hidden="true">
            <div className="about-visual-ring about-visual-ring-one" />
            <div className="about-visual-ring about-visual-ring-two" />

            <div className="about-visual-card">
              <div className="about-visual-icon">
                <Truck size={36} />
              </div>
              <span className="about-visual-label">LOGISTICS MADE SIMPLE</span>
              <h2>Every request starts with a plan.</h2>
              <p>
                Pickup details. Destination. The service you need.
              </p>
              <div className="about-route">
                <span className="about-route-point" />
                <span className="about-route-line" />
                <MapPin size={21} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="about-container about-intro-grid">
          <div>
            <span className="about-eyebrow">WHO WE ARE</span>
            <h2>Logistics support built around real needs.</h2>
          </div>
          <div className="about-intro-copy">
            <p>
              Arranging a delivery should begin with understanding what needs
              to move, where it needs to go, and what support is required.
              This website helps customers explore services and submit their
              enquiries in one place.
            </p>
            <p>
              Whether you need a parcel delivered, assistance with an errand,
              or information about business logistics, you can explore the
              available service options and contact the team about your
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">WHAT MATTERS</span>
            <h2>Principles behind the service</h2>
            <p>
              These are the service principles this website is designed to
              communicate to customers.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <span className="about-value-icon">
                    <Icon size={24} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-services-section">
        <div className="about-container">
          <div className="about-section-heading about-services-heading">
            <span className="about-eyebrow">HOW WE CAN HELP</span>
            <h2>Explore our services</h2>
            <p>
              Review the service options and confirm availability with the team
              before making arrangements.
            </p>
          </div>

          <div className="about-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="about-service-card" key={service.title}>
                  <span className="about-service-icon">
                    <Icon size={23} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-container about-cta-content">
          <div>
            <span className="about-eyebrow">LET'S GET STARTED</span>
            <h2>Have a delivery or logistics request?</h2>
            <p>
              Tell us what you need and provide the details required to discuss
              your request.
            </p>
          </div>
          <div className="about-cta-actions">
            <Link to="/request-quote" className="about-cta-primary">
              Request a quote <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="about-cta-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
