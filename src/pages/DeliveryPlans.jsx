
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Package,
  Truck,
  Building2,
  Boxes,
  MapPin,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./DeliveryPlans.css";

const plans = [
  {
    title: "Single Delivery",
    label: "For occasional needs",
    description:
      "A convenient option for one-off parcels, pickups, purchases, and personal errands.",
    icon: Package,
    features: [
      "One delivery request",
      "Pickup and destination details",
      "Preferred delivery date",
      "Suitable for personal needs",
    ],
  },
  {
    title: "Recurring Deliveries",
    label: "For regular deliveries",
    description:
      "Organise repeated deliveries around your routine, business activities, or ongoing needs.",
    icon: Truck,
    featured: true,
    features: [
      "Discuss a recurring schedule",
      "Plan multiple delivery requests",
      "Personal or business deliveries",
      "Arrange around your requirements",
    ],
  },
  {
    title: "Business Logistics",
    label: "For growing businesses",
    description:
      "Explore logistics support for business parcels, goods movement, and regular delivery needs.",
    icon: Building2,
    features: [
      "Business delivery enquiries",
      "Pickup and destination planning",
      "Discuss goods handling needs",
      "Explore ongoing support",
    ],
  },
];

const requirements = [
  {
    icon: MapPin,
    title: "Delivery locations",
    description: "Tell us where the item will be collected and where it needs to go.",
  },
  {
    icon: Package,
    title: "Package information",
    description: "Describe your parcel, goods, errand, or any special handling needs.",
  },
  {
    icon: Clock3,
    title: "Preferred timing",
    description: "Share your preferred date or schedule so the request can be reviewed.",
  },
];

export default function DeliveryPlans() {
  const [selectedPlan, setSelectedPlan] = useState("Recurring Deliveries");
  const navigate = useNavigate();

  const requestPlan = (plan) => {
    const service =
      plan === "Business Logistics"
        ? "Business Logistics"
        : plan === "Single Delivery"
          ? "Parcel Delivery"
          : "Logistics & Delivery";

    const notes = `Selected delivery plan: ${plan}. Please discuss the schedule, delivery requirements, availability, and applicable charges.`;

    navigate(
      `/request-quote?service=${encodeURIComponent(service)}&notes=${encodeURIComponent(notes)}`
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestPlan(selectedPlan);
  };

  return (
    <main className="delivery-plans-page">
      <section className="delivery-plans-hero">
        <div className="delivery-plans-container delivery-plans-hero-grid">
          <div className="delivery-plans-hero-copy">
            <span className="delivery-plans-eyebrow">
              <Truck size={17} aria-hidden="true" />
              DELIVERY OPTIONS
            </span>

            <h1>
              The right delivery plan for
              <span> the way you move.</span>
            </h1>

            <p>
              From a single parcel to recurring business deliveries, explore
              flexible delivery options designed around your needs.
            </p>

            <div className="delivery-plans-hero-actions">
              <Link to="/request-quote" className="delivery-plans-btn">
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="delivery-plans-contact-link">
                Talk to our team
              </Link>
            </div>

            <div className="delivery-plans-hero-note">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>Clear requirements. Convenient planning. Personal support.</span>
            </div>
          </div>

          <div className="delivery-plans-hero-visual" aria-hidden="true">
            <div className="delivery-plans-visual-ring ring-one" />
            <div className="delivery-plans-visual-ring ring-two" />

            <div className="delivery-plans-visual-card">
              <div className="delivery-plans-visual-icon">
                <Package size={34} />
              </div>
              <span>YOUR DELIVERY, YOUR PLAN</span>
              <h2>Logistics made easier.</h2>
              <p>
                Tell us what you need and let us help you explore a suitable
                delivery arrangement.
              </p>
              <div className="delivery-plans-visual-footer">
                <CheckCircle2 size={18} />
                A plan that fits your request
              </div>
            </div>

            <div className="delivery-plans-floating-card">
              <Truck size={20} />
              <span>
                <strong>Flexible options</strong>
                <small>Personal and business needs</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-plans-options">
        <div className="delivery-plans-container">
          <div className="delivery-plans-heading">
            <span className="delivery-plans-section-label">
              FIND YOUR FIT
            </span>
            <h2>Choose your delivery option</h2>
            <p>
              Select the option that best describes what you need. Our team
              can discuss availability, scheduling, and the applicable charges.
            </p>
          </div>

          <div className="delivery-plans-grid">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan === plan.title;

              return (
                <article
                  key={plan.title}
                  className={`delivery-plan-card ${
                    plan.featured ? "delivery-plan-featured" : ""
                  } ${isSelected ? "delivery-plan-selected" : ""}`}
                >
                  {plan.featured && (
                    <span className="delivery-plan-popular">
                      RECOMMENDED OPTION
                    </span>
                  )}

                  <div className="delivery-plan-icon">
                    <Icon size={26} aria-hidden="true" />
                  </div>

                  <span className="delivery-plan-label">{plan.label}</span>
                  <h3>{plan.title}</h3>
                  <p className="delivery-plan-description">
                    {plan.description}
                  </p>

                  <div className="delivery-plan-divider" />

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={17} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`delivery-plan-button ${
                      isSelected ? "delivery-plan-button-selected" : ""
                    }`}
                    onClick={() => setSelectedPlan(plan.title)}
                    aria-pressed={isSelected}
                  >
                    {isSelected ? "Selected plan" : "Choose this plan"}
                    {isSelected ? (
                      <CheckCircle2 size={17} />
                    ) : (
                      <ArrowRight size={17} />
                    )}
                  </button>
                </article>
              );
            })}
          </div>

          <p className="delivery-plans-disclaimer">
            Prices and availability are confirmed by the business after
            reviewing your requirements. No prices or delivery times are
            guaranteed on this page.
          </p>
        </div>
      </section>

      <section className="delivery-plans-requirements">
        <div className="delivery-plans-container">
          <div className="delivery-plans-heading">
            <span className="delivery-plans-section-label">
              <ClipboardList size={16} />
              GETTING STARTED
            </span>
            <h2>Help us plan your delivery</h2>
            <p>
              A few details will help the team understand your request and
              discuss the next steps with you.
            </p>
          </div>

          <div className="delivery-plans-requirements-grid">
            {requirements.map((item) => {
              const Icon = item.icon;

              return (
                <article className="delivery-requirement-card" key={item.title}>
                  <div className="delivery-requirement-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="delivery-plan-enquiry-section">
        <div className="delivery-plans-container delivery-plan-enquiry">
          <div className="delivery-plan-enquiry-copy">
            <span className="delivery-plans-section-label">
              <Boxes size={17} />
              YOUR NEXT STEP
            </span>
            <h2>Ready to plan your delivery?</h2>
            <p>
              Choose your preferred option and continue to the quote enquiry
              page to provide the details of your request.
            </p>
            <ul className="delivery-requirements">
              <li>
                <CheckCircle2 size={18} />
                Share your collection and destination
              </li>
              <li>
                <CheckCircle2 size={18} />
                Explain your delivery requirements
              </li>
              <li>
                <CheckCircle2 size={18} />
                Discuss timing and applicable charges
              </li>
            </ul>
          </div>

          <form className="delivery-plan-selection" onSubmit={handleSubmit}>
            <span className="delivery-plan-form-step">DELIVERY ENQUIRY</span>
            <label htmlFor="deliveryPlan">Your selected plan</label>
            <select
              id="deliveryPlan"
              value={selectedPlan}
              onChange={(event) => setSelectedPlan(event.target.value)}
            >
              {plans.map((plan) => (
                <option key={plan.title} value={plan.title}>
                  {plan.title}
                </option>
              ))}
            </select>

            <button type="submit">
              Continue to Enquiry <ArrowRight size={18} />
            </button>
            <p>
              This step prepares your enquiry. Pricing and availability must
              be confirmed by the business.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
