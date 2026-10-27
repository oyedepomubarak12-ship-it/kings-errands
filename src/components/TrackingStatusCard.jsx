
import {
  CheckCircle2,
  Circle,
  Clock3,
  MapPin,
  Package,
  Truck,
} from "lucide-react";

function getStatusClass(status) {
  switch (status.toLowerCase()) {
    case "delivered":
      return "tracking-status-delivered";
    case "in transit":
      return "tracking-status-transit";
    default:
      return "tracking-status-processing";
  }
}

function getStepIcon(title) {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("delivered")) return CheckCircle2;
  if (normalizedTitle.includes("transit")) return Truck;
  if (normalizedTitle.includes("pickup")) return Package;

  return Circle;
}

export default function TrackingStatusCard({ shipment }) {
  if (!shipment) return null;

  return (
    <article className="tracking-status-card">
      <div className="tracking-status-card-header">
        <div className="tracking-shipment-identity">
          <span className="tracking-shipment-icon">
            <Package size={24} />
          </span>
          <div>
            <span className="tracking-card-overline">TRACKING REFERENCE</span>
            <h3>{shipment.trackingNumber}</h3>
          </div>
        </div>

        <span
          className={`tracking-status-pill ${getStatusClass(shipment.status)}`}
        >
          {shipment.status}
        </span>
      </div>

      <div className="tracking-shipment-details">
        <div className="tracking-shipment-detail">
          <span className="tracking-detail-icon">
            <Package size={19} />
          </span>
          <div>
            <span>Service</span>
            <strong>{shipment.service}</strong>
          </div>
        </div>

        <div className="tracking-shipment-detail">
          <span className="tracking-detail-icon">
            <MapPin size={19} />
          </span>
          <div>
            <span>Destination</span>
            <strong>{shipment.destination}</strong>
          </div>
        </div>
      </div>

      <div className="tracking-timeline-section">
        <div className="tracking-timeline-heading">
          <div>
            <span className="tracking-card-overline">SHIPMENT JOURNEY</span>
            <h3>Tracking timeline</h3>
          </div>
          <Clock3 size={21} />
        </div>

        <ol className="tracking-timeline">
          {shipment.events.map((event, index) => {
            const Icon = getStepIcon(event.title);
            const isLast = index === shipment.events.length - 1;

            return (
              <li
                key={`${shipment.trackingNumber}-${event.title}`}
                className={`tracking-timeline-item ${
                  event.completed ? "is-complete" : "is-pending"
                } ${isLast ? "is-last" : ""}`}
              >
                <div className="tracking-timeline-marker">
                  {event.completed ? (
                    <CheckCircle2 size={21} />
                  ) : (
                    <Icon size={20} />
                  )}
                </div>

                <div className="tracking-timeline-content">
                  <div className="tracking-timeline-title-row">
                    <h4>{event.title}</h4>
                    <span>{event.date}</span>
                  </div>
                  <p>{event.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <p className="tracking-card-disclaimer">
        <ShieldCheckIcon /> Demonstration record only. Live status and event
        timestamps require a connected shipment database or tracking service.
      </p>
    </article>
  );
}

function ShieldCheckIcon() {
  return <CheckCircle2 size={16} aria-hidden="true" />;
}
