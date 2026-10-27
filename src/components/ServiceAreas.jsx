
import {
  MapPin,
  ArrowUpRight,
  Truck,
  Building2,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./ServiceAreas.css";

const serviceAreas = [
  {
    title: "Personal Deliveries",
    description:
      "Convenient pickup and delivery support for individuals and everyday errands.",
    icon: Package,
    label: "PERSONAL",
  },
  {
    title: "Business Logistics",
    description:
      "Flexible logistics support for businesses handling parcels and regular deliveries.",
    icon: Building2,
    label: "BUSINESS",
  },
  {
    title: "Pickup & Drop-off",
    description:
      "Arrange a pickup and delivery based on your location and service requirements.",
    icon: Truck,
    label: "ON DEMAND",
  },
];

export default function ServiceAreas() {
  return (
    <section className="service-areas-section">
      <div className="service-areas-container">
        <div className="service-areas-heading">
          <div>
            <span className="service-areas-eyebrow">
              <MapPin size={15} />
              DELIVERY SUPPORT
            </span>

            <h2>Logistics that works around you.</h2>

            <p>
              From personal errands to business deliveries, tell us what you
              need so we can help determine the right service for your location.
            </p>
          </div>

          <Link to="/contact" className="service-areas-link">
            Contact our team <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="service-areas-grid">
          {serviceAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article className="service-area-card" key={area.title}>
                <div className="service-area-card-top">
                  <span className="service-area-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </span>

                  <span className="service-area-label">{area.label}</span>
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>

                <Link
                  to={`/request-quote?service=${encodeURIComponent(area.title)}`}
                  className="service-area-action"
                >
                  Request this service <ArrowUpRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="service-areas-note">
          <span className="service-areas-note-icon">
            <MapPin size={20} />
          </span>

          <p>
            <strong>Need delivery to a specific location?</strong>
            Share your pickup and destination details when requesting a quote
            so the team can advise on availability.
          </p>
        </div>
      </div>
    </section>
  );
}
