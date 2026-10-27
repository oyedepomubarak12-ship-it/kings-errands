
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Package,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const services = [
  { label: "Logistics & Delivery", to: "/services" },
  { label: "Business Logistics", to: "/business-logistics" },
  { label: "Delivery Plans", to: "/delivery-plans" },
  { label: "Track a Delivery", to: "/track-delivery" },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "FAQs", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Kings Errands home">
            <span className="footer-logo-icon">
              <Package size={25} strokeWidth={2.2} />
            </span>
            <span className="footer-logo-text">
              <strong>KINGS</strong>
              <small>ERRANDS &amp; LOGISTICS</small>
            </span>
          </Link>

          <p className="footer-description">
            Making deliveries and everyday errands simpler with convenient,
            dependable logistics support for individuals and businesses.
          </p>

          <Link to="/request-quote" className="footer-quote-link">
            Request a quote <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          {services.map((service) => (
            <Link to={service.to} key={service.to}>
              {service.label}
            </Link>
          ))}
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          {companyLinks.map((item) => (
            <Link to={item.to} key={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>
            <MapPin size={18} />
            <span>Contact us for service-area information.</span>
          </p>
          <p>
            <Phone size={18} />
            <span>Speak with our team about your delivery needs.</span>
          </p>
          <p>
            <Mail size={18} />
            <span>Send us an enquiry through our contact page.</span>
          </p>
          <Link to="/contact" className="footer-contact-link">
            Contact our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Kings Errands &amp; Logistics. All rights
          reserved.
        </p>
        <Link to="/faq">Help &amp; FAQs</Link>
      </div>
    </footer>
  );
}
