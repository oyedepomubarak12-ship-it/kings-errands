
import {
  ArrowRight,
  Clock3,
  Package,
  ShoppingBag,
  Truck,
  Warehouse,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./ServiceHighlights.css";

const services = [
  {
    icon: Truck,
    number: "01",
    title: "Logistics & Delivery",
    description:
      "Delivery support for parcels, business goods, and everyday transport requirements.",
  },
  {
    icon: Package,
    number: "02",
    title: "Parcel Delivery",
    description:
      "Convenient parcel delivery support for personal and business needs.",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Errand Services",
    description:
      "Practical assistance with everyday tasks and requests.",
  },
  {
    icon: Warehouse,
    number: "04",
    title: "Storage & Handling",
    description:
      "Explore storage and goods-handling support for your logistics needs.",
  },
];

export default function ServiceHighlights() {
  return (
    <section className="service-highlights">
      <div className="service-highlights-container">
        <div className="service-highlights-heading">
          <div>
            <span className="service-highlights-label">
              WHAT WE CAN HELP WITH
            </span>
            <h2>Logistics solutions for everyday business.</h2>
            <p>
              Explore the services presented by Kings Errands &amp; Logistics
              and find the support that best fits your requirements.
            </p>
          </div>

          <Link
            to="/services"
            className="service-highlights-all-link"
          >
            View all services <ArrowRight size={17} />
          </Link>
        </div>

        <div className="service-highlights-grid">
          {services.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <article
                className="service-highlight-card"
                key={service.number}
              >
                <div className="service-highlight-top">
                  <span className="service-highlight-icon">
                    <ServiceIcon size={25} strokeWidth={1.8} />
                  </span>
                  <span className="service-highlight-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link
                  to="/services"
                  className="service-highlight-link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="service-highlights-note">
          <Clock3 size={19} />
          <p>
            Need help choosing a service? Send an enquiry and describe what
            you need.
          </p>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
