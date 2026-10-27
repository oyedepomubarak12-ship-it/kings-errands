
import {
  ArrowRight,
  ArrowUpRight,
  Package,
  Truck,
  ShoppingBag,
  Warehouse,
  Building2,
  Clock3,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    icon: Truck,
    number: "01",
    title: "Logistics & Delivery",
    description:
      "Delivery support for parcels, business goods, and everyday transport needs.",
    features: [
      "Parcel delivery coordination",
      "Business delivery support",
      "Delivery enquiries",
    ],
  },
  {
    icon: Package,
    number: "02",
    title: "Parcel Delivery",
    description:
      "Arrange the movement of packages with clear communication throughout the process.",
    features: [
      "Package collection enquiries",
      "Delivery arrangements",
      "Shipment tracking demo",
    ],
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Errand Services",
    description:
      "Practical assistance with everyday tasks and errands, subject to service availability.",
    features: [
      "Personal errand requests",
      "Shopping assistance enquiries",
      "Convenient service requests",
    ],
  },
  {
    icon: Warehouse,
    number: "04",
    title: "Storage & Handling",
    description:
      "Discuss storage and goods-handling requirements for your personal or business needs.",
    features: [
      "Storage enquiries",
      "Goods-handling requirements",
      "Business support requests",
    ],
  },
  {
    icon: Building2,
    number: "05",
    title: "Business Logistics",
    description:
      "Explore delivery and logistics arrangements designed around your business operations.",
    features: [
      "Business delivery enquiries",
      "Recurring logistics requirements",
      "Custom service discussions",
    ],
  },
  {
    icon: MapPin,
    number: "06",
    title: "Delivery Planning",
    description:
      "Share your collection and destination details so the team can discuss a suitable arrangement.",
    features: [
      "Collection and destination details",
      "Delivery requirement planning",
      "Quote requests",
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Careful Coordination",
    text: "Clear requirements help the team understand how your items should be handled.",
  },
  {
    icon: Clock3,
    title: "Convenient Requests",
    text: "Send your delivery or errand enquiry online whenever it suits you.",
  },
  {
    icon: Truck,
    title: "Flexible Requirements",
    text: "Share the details of your personal or business logistics needs.",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-container services-hero-grid">
          <div className="services-hero-content">
            <span className="services-eyebrow">
              WHAT WE CAN HELP WITH
            </span>

            <h1>
              Logistics that fit
              <span> your everyday needs.</span>
            </h1>

            <p>
              From parcel delivery to business logistics and everyday errands,
              tell us what you need and let’s discuss the right arrangement.
            </p>

            <div className="services-hero-actions">
              <Link to="/request-quote" className="services-primary-btn">
                Request a Quote <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="services-secondary-btn">
                Talk to Our Team
              </Link>
            </div>

            <div className="services-hero-note">
              <ShieldCheck size={17} />
              <span>Clear requests. Practical logistics support.</span>
            </div>
          </div>

          <div className="services-hero-visual">
            <div className="services-visual-top">
              <span className="services-visual-icon">
                <Package size={28} />
              </span>
              <span className="services-visual-label">
                DELIVERY SUPPORT
              </span>
            </div>

            <div className="services-route">
              <div className="services-route-point">
                <span className="services-route-dot" />
                <div>
                  <small>COLLECTION</small>
                  <strong>Your starting point</strong>
                </div>
              </div>

              <div className="services-route-line">
                <Truck size={22} />
              </div>

              <div className="services-route-point">
                <span className="services-route-dot destination" />
                <div>
                  <small>DESTINATION</small>
                  <strong>Your delivery location</strong>
                </div>
              </div>
            </div>

            <div className="services-visual-bottom">
              <span>
                <MapPin size={16} /> Share your delivery details
              </span>
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="services-list-section">
        <div className="services-container">
          <div className="services-section-heading">
            <div>
              <span className="services-eyebrow">OUR SERVICES</span>
              <h2>How we can assist you</h2>
            </div>

            <p>
              Choose a service to learn more or send a request with your
              requirements.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-card-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </span>
                    <span className="service-card-number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p className="service-card-description">
                    {service.description}
                  </p>

                  <ul className="service-card-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span className="service-feature-dot" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/request-quote"
                    className="service-card-link"
                    aria-label={`Request a quote for ${service.title}`}
                  >
                    Make an enquiry <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-benefits-section">
        <div className="services-container">
          <div className="services-benefits-heading">
            <span className="services-eyebrow">WHY KINGS ERRANDS</span>
            <h2>Support built around your needs</h2>
            <p>
              Start with the details of your request so the right service
              arrangements can be discussed.
            </p>
          </div>

          <div className="services-benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="services-benefit" key={benefit.title}>
                  <span className="services-benefit-icon">
                    <Icon size={24} />
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-cta-section">
        <div className="services-container services-cta">
          <div>
            <span className="services-eyebrow">LET’S GET STARTED</span>
            <h2>Have a delivery or errand in mind?</h2>
            <p>
              Tell us what you need, where it needs to go, and any important
              requirements.
            </p>
          </div>

          <div className="services-cta-actions">
            <Link to="/request-quote" className="services-primary-btn">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="services-cta-contact">
              Contact Us <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
