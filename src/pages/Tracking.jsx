
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Package,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import TrackingStatusCard from "../components/TrackingStatusCard";
import "./Tracking.css";

const demoShipments = {
  "KEL-2026-001": {
    trackingNumber: "KEL-2026-001",
    status: "In Transit",
    service: "Standard Delivery",
    origin: "Pickup location to be confirmed",
    destination: "Ibadan, Oyo State",
    description: "Sample shipment currently marked as in transit.",
    events: [
      {
        title: "Shipment registered",
        description: "The delivery request was recorded.",
        date: "Sample event",
        completed: true,
      },
      {
        title: "Package picked up",
        description: "The package was marked as collected.",
        date: "Sample event",
        completed: true,
      },
      {
        title: "In transit",
        description: "The package was marked as moving toward its destination.",
        date: "Sample event",
        completed: true,
      },
      {
        title: "Delivered",
        description: "Delivery confirmation is pending in this demonstration.",
        date: "Pending",
        completed: false,
      },
    ],
  },
  "KEL-2026-002": {
    trackingNumber: "KEL-2026-002",
    status: "Processing",
    service: "Parcel Delivery",
    origin: "To be confirmed",
    destination: "To be confirmed",
    description: "Sample shipment awaiting further processing.",
    events: [
      {
        title: "Shipment registered",
        description: "The delivery request was recorded.",
        date: "Sample event",
        completed: true,
      },
      {
        title: "Preparing shipment",
        description: "The shipment is marked as being prepared.",
        date: "Sample event",
        completed: true,
      },
      {
        title: "In transit",
        description: "Transit has not been confirmed.",
        date: "Pending",
        completed: false,
      },
      {
        title: "Delivered",
        description: "Delivery has not been confirmed.",
        date: "Pending",
        completed: false,
      },
    ],
  },
  "KEL-2026-003": {
    trackingNumber: "KEL-2026-003",
    status: "Delivered",
    service: "Parcel Delivery",
    origin: "Pickup location to be confirmed",
    destination: "Ibadan, Oyo State",
    description: "Sample shipment marked as delivered for demonstration.",
    events: [
      {
        title: "Shipment registered",
        description: "The delivery request was recorded.",
        date: "Sample event",
        completed: true,
      },
      {
        title: "Package picked up",
        description: "The package was marked as collected.",
        date: "Sample event",
        completed: true,
      },
      {
        title: "In transit",
        description: "The shipment was marked as in transit.",
        date: "Sample event",
        completed: true,
      },
      {
        title: "Delivered",
        description: "The sample shipment was marked as delivered.",
        date: "Sample event",
        completed: true,
      },
    ],
  },
};

export default function Tracking() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(
    searchParams.get("tracking") || ""
  );
  const [searchedNumber, setSearchedNumber] = useState(
    searchParams.get("tracking") || ""
  );
  const [hasSearched, setHasSearched] = useState(
    Boolean(searchParams.get("tracking"))
  );

  const normalizedNumber = searchedNumber.trim().toUpperCase();
  const shipment = demoShipments[normalizedNumber];

  function handleSubmit(event) {
    event.preventDefault();

    const cleanedNumber = trackingNumber.trim().toUpperCase();

    setSearchedNumber(cleanedNumber);
    setHasSearched(true);

    if (cleanedNumber) {
      setSearchParams({ tracking: cleanedNumber });
    } else {
      setSearchParams({});
    }
  }

  return (
    <main className="tracking-page">
      <section className="tracking-hero">
        <div className="tracking-container tracking-hero-grid">
          <div className="tracking-hero-copy">
            <span className="tracking-eyebrow">
              <Truck size={16} />
              DELIVERY TRACKING
            </span>

            <h1>Know where your delivery stands.</h1>

            <p>
              Enter your tracking reference to view the matching shipment
              information available in this website demonstration.
            </p>

            <div className="tracking-trust-points">
              <span><ShieldCheck size={17} /> Reference-based search</span>
              <span><ClipboardList size={17} /> Shipment timeline</span>
            </div>
          </div>

          <div className="tracking-search-card">
            <div className="tracking-search-icon">
              <Package size={27} />
            </div>

            <h2>Track your shipment</h2>
            <p>Enter your tracking reference below.</p>

            <form className="tracking-search-form" onSubmit={handleSubmit}>
              <label htmlFor="tracking-reference">Tracking reference</label>

              <div className="tracking-input-wrap">
                <Search size={19} />
                <input
                  id="tracking-reference"
                  name="tracking"
                  value={trackingNumber}
                  onChange={(event) => setTrackingNumber(event.target.value)}
                  placeholder="e.g. KEL-2026-001"
                  autoComplete="off"
                  required
                />
              </div>

              <button type="submit" className="tracking-search-button">
                Find shipment <ArrowRight size={18} />
              </button>
            </form>

            <p className="tracking-demo-hint">
              Demo references: KEL-2026-001, KEL-2026-002, KEL-2026-003
            </p>
          </div>
        </div>
      </section>

      <section className="tracking-results-section">
        <div className="tracking-container">
          {!hasSearched && (
            <div className="tracking-empty-state">
              <div className="tracking-empty-icon">
                <Package size={28} />
              </div>
              <h2>Your shipment details will appear here</h2>
              <p>
                Submit a tracking reference above to view the matching
                demonstration record.
              </p>
            </div>
          )}

          {hasSearched && shipment && (
            <>
              <div className="tracking-results-heading">
                <div>
                  <span className="tracking-eyebrow">SEARCH RESULT</span>
                  <h2>Shipment details</h2>
                  <p>
                    Reference: <strong>{shipment.trackingNumber}</strong>
                  </p>
                </div>
                <span className="tracking-demo-badge">Demo data</span>
              </div>

              <div className="tracking-demo-notice">
                <ShieldCheck size={20} />
                <p>
                  This is a sample shipment record for the frontend demo. It
                  does not reflect verified, live delivery information.
                </p>
              </div>

              <TrackingStatusCard shipment={shipment} />
            </>
          )}

          {hasSearched && !shipment && (
            <div className="tracking-not-found" role="status">
              <div className="tracking-not-found-icon">
                <Search size={26} />
              </div>
              <h2>No matching demo shipment</h2>
              <p>
                No demonstration record matches{" "}
                <strong>{searchedNumber || "an empty reference"}</strong>.
                Check the reference or use one of the sample references above.
                Real shipment lookup requires a connected backend.
              </p>
              <button
                className="tracking-reset-button"
                onClick={() => {
                  setTrackingNumber("");
                  setSearchedNumber("");
                  setHasSearched(false);
                  setSearchParams({});
                }}
                type="button"
              >
                Try another reference
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="tracking-help-section">
        <div className="tracking-container tracking-help-card">
          <div>
            <span className="tracking-eyebrow">NEED ASSISTANCE?</span>
            <h2>Have a question about a delivery?</h2>
            <p>
              Contact the team with your reference and enquiry. This demo
              cannot retrieve live shipment updates.
            </p>
          </div>
          <Link to="/contact" className="tracking-help-link">
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
