
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Package,
  Truck,
  Building2,
  Boxes,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./DeliveryPlans.css";

const plans = [
  {
    title: "Single Delivery",
    description:
      "For one-off parcel deliveries, pickups, and individual errands.",
    icon: Package,
    features: [
      "One delivery request",
      "Pickup and destination details",
      "Preferred delivery date",
      "Suitable for occasional needs",
    ],
  },
  {
    title: "Recurring Deliveries",
    description:
      "For customers and businesses that need delivery support regularly.",
    icon: Truck,
    featured: true,
    features: [
      "Discuss a recurring schedule",
      "Multiple delivery requirements",
      "Business or personal deliveries",
      "Plan around your operational needs",
    ],
  },
  {
    title: "Business Logistics",
    description:
      "For organisations that need support with goods, parcels, and logistics.",
    icon: Building2,
    features: [
      "Business delivery enquiries",
      "Pickup and destination planning",
      "Discuss handling requirements",
      "Explore ongoing logistics support",
    ],
  },
];

const requirements = [
  "Your contact and business details, where applicable",
  "Pickup and delivery locations",
  "Preferred delivery dates or schedule",
  "Package details and special instructions",
];

export default function DeliveryPlans() {
  const [selectedPlan, setSelectedPlan] = useState("Recurring Deliveries");
  const navigate = useNavigate();

  const requestPlan = (plan) => {
    const notes = `Selected delivery plan: ${plan}. Please discuss the schedule, delivery requirements, and applicable charges.`;

    navigate(
      `/request-quote?service=${encodeURIComponent(
        plan === "Business Logistics"
          ? "Business Logistics"
          : plan === "Single Delivery"
            ? "Parcel Delivery"
            : "Logistics & Delivery"
      )}&notes=${encodeURIComponent(notes)}`
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    requestPlan(selectedPlan);
  };

  return (
    <main className="delivery-plans-page">
      <section className="delivery-plans-hero">
        <div className="delivery-plans-container">
          <span className="delivery-plans-eyebrow">
            <Clock3 size={17} />
            DELIVERY OPTIONS
          </span>

          <h1>Delivery Solutions That Fit Your Needs</h1>

          <p>
            From one-off errands to regular business deliveries, tell us what
            you need and prepare an enquiry for the right service.
          </p>

          <Link to="/request-quote" className="delivery-plans-hero-button">
            Request a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="delivery-plans-section">
        <div className="delivery-plans-container">
          <div className="delivery-plans-heading">
            <span>CHOOSE YOUR OPTION</span>
            <h2>Delivery plans</h2>
            <p>
              Select the option that best describes your delivery needs.
              Final availability and charges can be discussed with the business.
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
                    plan.featured ? "featured" : ""
                  } ${isSelected ? "selected" : ""}`}
                >
                  {plan.featured && (
                    <span className="delivery-plan-badge">
                      Popular option
                    </span>
                  )}

                  <div className="delivery-plan-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{plan.title}</h3>
                  <p className="delivery-plan-description">
                    {plan.description}
                  </p>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={17} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={
                      isSelected
                        ? "delivery-plan-button selected-button"
                        : "delivery-plan-button"
                    }
                    onClick={() => setSelectedPlan(plan.title)}
                  >
                    {isSelected ? "Selected" : "Choose this plan"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="delivery-plan-enquiry-section">
        <div className="delivery-plans-container delivery-plan-enquiry">
          <div>
            <span className="delivery-plans-section-label">
              <Boxes size={17} />
              PREPARE YOUR ENQUIRY
            </span>

            <h2>Which delivery option do you need?</h2>

            <p>
              Your selected plan will be included in the enquiry form so you
              can provide the remaining details.
            </p>

            <ul className="delivery-requirements">
              {requirements.map((requirement) => (
                <li key={requirement}>
                  <CheckCircle2 size={18} />
                  {requirement}
                </li>
              ))}
            </ul>
          </div>

          <form className="delivery-plan-selection" onSubmit={handleSubmit}>
            <label htmlFor="deliveryPlan">Selected delivery plan</label>

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
              Continue to Enquiry
              <ArrowRight size={18} />
            </button>

            <p>
              No payment is taken on this page. This is a frontend enquiry
              workflow.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
