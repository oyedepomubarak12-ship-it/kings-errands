
import {
  ArrowRight,
  ArrowUpRight,
  Package,
  Truck,
  ShoppingBag,
  Warehouse,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./ServiceHighlights.css";

const services = [
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Explore delivery support for parcels, goods, and everyday transport needs.",
    number: "01",
  },
  {
    icon: Package,
    title: "Parcel Delivery",
    description:
      "Share your collection and destination details to discuss your package delivery.",
    number: "02",
  },
  {
    icon: ShoppingBag,
    title: "Errand Services",
    description:
      "Enquire about practical assistance with everyday errands and personal requests.",
    number: "03",
  },
  {
    icon: Warehouse,
    title: "Storage & Handling",
    description:
      "Discuss storage and goods-handling requirements for your needs.",
    number: "04",
  },
];

export default function ServiceHighlights() {
  return (
    <section className="service-highlights-section">
      <div className="service-highlights-container">
        <div className="service-highlights-heading">
          <div className="service-highlights-title">
            <span className="service-highlights-eyebrow">
              OUR SERVICES
            </span>
            <h2>Practical support for everyday logistics</h2>
            <p>
              Whether you are sending a parcel or arranging business
              deliveries, start by telling us what you need.
            </p>
          </div>

          <Link
            to="/services"
            className="service-highlights-view-all"
          >
            Explore all services
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="service-highlights-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-highlight-card"
                key={service.number}
              >
                <div className="service-highlight-card-top">
                  <span className="service-highlight-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </span>

                  <span className="service-highlight-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className="service-highlight-description">
                  {service.description}
                </p>

                <Link
                  to="/request-quote"
                  className="service-highlight-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  Make an enquiry
                  <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="service-highlights-bottom">
          <p>Have a different logistics requirement?</p>
          <Link to="/contact">
            Contact our team <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
