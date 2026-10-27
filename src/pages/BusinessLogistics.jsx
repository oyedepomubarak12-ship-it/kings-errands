
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardList,
  Package,
  Route,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./BusinessLogistics.css";

const solutions = [
  {
    icon: Package,
    title: "Parcel & Goods Delivery",
    description:
      "Explore delivery arrangements for packages, goods, and business consignments.",
  },
  {
    icon: Route,
    title: "Delivery Coordination",
    description:
      "Discuss your collection and delivery requirements to identify a suitable arrangement.",
  },
  {
    icon: Boxes,
    title: "Goods Handling",
    description:
      "Enquire about handling and movement requirements for your business goods.",
  },
  {
    icon: Truck,
    title: "Ongoing Logistics Needs",
    description:
      "Talk to us about recurring or project-based logistics requirements for your operations.",
  },
];

const process = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share the type of goods, collection details, destination, and service requirements.",
  },
  {
    number: "02",
    title: "Discuss Your Requirements",
    description:
      "Submit your enquiry so the details and possible service arrangements can be discussed.",
  },
  {
    number: "03",
    title: "Request a Quote",
    description:
      "Provide the information needed to enquire about pricing and the next steps.",
  },
];

export default function BusinessLogistics() {
  return (
    <div className="business-logistics-page">
      <section className="business-logistics-hero">
        <div className="business-logistics-container business-logistics-hero-grid">
          <div className="business-logistics-hero-copy">
            <span className="business-logistics-eyebrow">
              LOGISTICS FOR BUSINESSES
            </span>

            <h1>
              Logistics Support
              <br />
              <span>For Your Business</span>
            </h1>

            <p>
              Explore practical delivery and logistics options for
              your business. Tell us about your requirements and make
              an enquiry to discuss a suitable arrangement.
            </p>

            <div className="business-logistics-actions">
              <Link
                to="/request-quote"
                className="business-logistics-button business-logistics-button-gold"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="business-logistics-button business-logistics-button-outline"
              >
                Contact Us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div
            className="business-logistics-hero-art"
            aria-hidden="true"
          >
            <div className="business-logistics-art-circle" />
            <div className="business-logistics-art-card">
              <div className="business-logistics-art-icon">
                <Building2 size={31} />
              </div>

              <span className="business-logistics-art-label">
                BUSINESS LOGISTICS
              </span>

              <div className="business-logistics-art-illustration">
                <Truck size={90} strokeWidth={1.3} />
              </div>

              <div className="business-logistics-art-bottom">
                <span>
                  <CheckCircle2 size={17} />
                  Delivery enquiries
                </span>
                <span>
                  <ClipboardList size={17} />
                  Business requests
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="business-logistics-solutions">
        <div className="business-logistics-container">
          <div className="business-logistics-section-heading">
            <span className="business-logistics-eyebrow business-logistics-eyebrow-light">
              OUR SOLUTIONS
            </span>

            <h2>Explore Logistics Options for Your Operations</h2>

            <p>
              Every business has different needs. Start by identifying
              the kind of support you are looking for.
            </p>
          </div>

          <div className="business-logistics-solution-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  className="business-logistics-solution-card"
                  key={solution.title}
                >
                  <span className="business-logistics-solution-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </span>

                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="business-logistics-process">
        <div className="business-logistics-container business-logistics-process-grid">
          <div className="business-logistics-process-copy">
            <span className="business-logistics-eyebrow business-logistics-eyebrow-light">
              HOW TO GET STARTED
            </span>

            <h2>A Simple Way to Make a Business Enquiry</h2>

            <p>
              Share the details of your logistics needs so your
              enquiry can be reviewed and the next steps discussed.
            </p>

            <Link
              to="/request-quote"
              className="business-logistics-button business-logistics-button-navy"
            >
              Start Your Enquiry
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="business-logistics-steps">
            {process.map((step) => (
              <article
                className="business-logistics-step"
                key={step.number}
              >
                <span className="business-logistics-step-number">
                  {step.number}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="business-logistics-cta">
        <div className="business-logistics-container business-logistics-cta-inner">
          <div>
            <span className="business-logistics-eyebrow">
              LET'S DISCUSS YOUR NEEDS
            </span>

            <h2>Looking for a Logistics Arrangement for Your Business?</h2>

            <p>
              Send an enquiry with your requirements to get the
              conversation started.
            </p>
          </div>

          <Link
            to="/request-quote"
            className="business-logistics-button business-logistics-button-gold"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
