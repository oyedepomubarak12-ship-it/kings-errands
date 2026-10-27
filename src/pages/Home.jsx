
import {
  ArrowRight,
  ArrowUpRight,
  Package,
  Truck,
  ShoppingBag,
  Warehouse,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const services = [
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Convenient delivery support for parcels, goods, and business consignments.",
    link: "/services",
  },
  {
    icon: Package,
    title: "Parcel Delivery",
    description:
      "A simple way to arrange delivery for packages and personal items.",
    link: "/services",
  },
  {
    icon: ShoppingBag,
    title: "Errand Services",
    description:
      "Practical assistance with everyday errands and collection requests.",
    link: "/services",
  },
  {
    icon: Warehouse,
    title: "Business Logistics",
    description:
      "Explore logistics support options for businesses and organisations.",
    link: "/business-logistics",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Careful Handling",
    description:
      "We recognise the importance of handling customers' items with care.",
  },
  {
    icon: Clock3,
    title: "Convenient Service",
    description:
      "Explore service options designed to make delivery arrangements easier.",
  },
  {
    icon: MapPin,
    title: "Delivery Support",
    description:
      "Find the appropriate service for your delivery or logistics needs.",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-shape home-hero-shape-one" />
        <div className="home-hero-shape home-hero-shape-two" />

        <div className="home-container home-hero-grid">
          <div className="home-hero-content">
            <span className="home-eyebrow">
              KINGS ERRANDS & LOGISTICS
            </span>

            <h1>
              Moving Your Goods.
              <br />
              <span>Making Life Easier.</span>
            </h1>

            <p className="home-hero-description">
              Discover practical delivery, errand, and logistics
              solutions for your personal needs and business operations.
            </p>

            <div className="home-hero-actions">
              <Link to="/request-quote" className="home-button home-button-gold">
                Request a Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="home-button home-button-outline"
              >
                Explore Our Services
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="home-hero-note">
              <CheckCircle2 size={17} />
              <span>Explore services for individuals and businesses</span>
            </div>
          </div>

          <div className="home-hero-visual" aria-hidden="true">
            <div className="home-visual-circle" />
            <div className="home-visual-card">
              <div className="home-visual-card-top">
                <span className="home-visual-icon">
                  <Package size={28} />
                </span>
                <span className="home-visual-label">DELIVERY SOLUTIONS</span>
              </div>

              <div className="home-visual-package">
                <Package size={100} strokeWidth={1.15} />
              </div>

              <div className="home-visual-route">
                <span className="home-route-point">
                  <MapPin size={18} />
                </span>
                <span className="home-route-line" />
                <span className="home-route-truck">
                  <Truck size={23} />
                </span>
                <span className="home-route-line" />
                <span className="home-route-point">
                  <MapPin size={18} />
                </span>
              </div>

              <p className="home-visual-caption">
                Delivery and logistics made easier
              </p>
            </div>

            <div className="home-floating-badge">
              <ShieldCheck size={21} />
              <span>
                <strong>Handled with care</strong>
                <small>Your items matter</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-services section-padding">
        <div className="home-container">
          <div className="home-section-heading">
            <div>
              <span className="home-eyebrow home-eyebrow-light">
                WHAT WE OFFER
              </span>
              <h2>Solutions for Your Everyday Needs</h2>
            </div>

            <Link to="/services" className="home-text-link">
              View all services
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="home-service-card" key={service.title}>
                  <div className="home-service-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link
                    to={service.link}
                    className="home-card-link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-about section-padding">
        <div className="home-container home-about-grid">
          <div className="home-about-visual">
            <div className="home-about-icon-panel">
              <Truck size={82} strokeWidth={1.2} />
              <span>LOGISTICS</span>
            </div>
            <div className="home-about-accent" />
          </div>

          <div className="home-about-content">
            <span className="home-eyebrow home-eyebrow-light">
              WHY CHOOSE US
            </span>

            <h2>Practical Support for Moving What Matters</h2>

            <p>
              Whether you need help with a delivery, an errand, or
              business logistics, Kings Errands & Logistics gives you
              a place to explore available service options and make an
              enquiry.
            </p>

            <div className="home-benefits">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div className="home-benefit" key={benefit.title}>
                    <span className="home-benefit-icon">
                      <Icon size={22} />
                    </span>

                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link to="/about" className="home-button home-button-navy">
              Learn About Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-business-strip">
        <div className="home-container home-business-content">
          <div>
            <span className="home-eyebrow">FOR BUSINESSES</span>
            <h2>Looking for Logistics Support for Your Business?</h2>
            <p>
              Explore business logistics options and enquire about
              services that suit your operational needs.
            </p>
          </div>

          <Link
            to="/business-logistics"
            className="home-button home-button-gold"
          >
            Explore Business Logistics
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="home-cta section-padding">
        <div className="home-container home-cta-inner">
          <span className="home-eyebrow">LET'S GET STARTED</span>
          <h2>Have a Delivery or Logistics Enquiry?</h2>
          <p>
            Tell us what you need and submit an enquiry to get the
            conversation started.
          </p>

          <div className="home-hero-actions home-cta-actions">
            <Link to="/request-quote" className="home-button home-button-gold">
              Request a Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="home-button home-button-outline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
