
const serviceOptions = [
  "Logistics & Delivery",
  "Parcel Delivery",
  "Errand Services",
  "Storage & Handling",
  "Business Logistics",
  "Delivery Planning",
  "Other",
];

export default function QuoteFormFields({ form, onChange }) {
  return (
    <div className="quote-fields">
      <div className="quote-field">
        <label htmlFor="quote-fullName">Full name *</label>
        <input
          id="quote-fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={onChange}
          required
        />
      </div>

      <div className="quote-field">
        <label htmlFor="quote-phone">Phone number *</label>
        <input
          id="quote-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={onChange}
          required
        />
      </div>

      <div className="quote-field quote-field-full">
        <label htmlFor="quote-email">Email address *</label>
        <input
          id="quote-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={onChange}
          required
        />
      </div>

      <div className="quote-field quote-field-full">
        <label htmlFor="quote-service">Service required *</label>
        <select
          id="quote-service"
          name="service"
          value={form.service}
          onChange={onChange}
          required
        >
          <option value="">Choose a service</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="quote-field quote-field-full">
        <label htmlFor="quote-pickup">Collection location *</label>
        <input
          id="quote-pickup"
          name="pickup"
          type="text"
          placeholder="Enter collection address or area"
          value={form.pickup}
          onChange={onChange}
          required
        />
      </div>

      <div className="quote-field quote-field-full">
        <label htmlFor="quote-destination">Destination *</label>
        <input
          id="quote-destination"
          name="destination"
          type="text"
          placeholder="Enter destination address or area"
          value={form.destination}
          onChange={onChange}
          required
        />
      </div>

      <div className="quote-field quote-field-full">
        <label htmlFor="quote-packageDetails">
          Package or errand details *
        </label>
        <textarea
          id="quote-packageDetails"
          name="packageDetails"
          rows="4"
          placeholder="Describe the package, goods, or errand"
          value={form.packageDetails}
          onChange={onChange}
          required
        />
      </div>

      <div className="quote-field quote-field-full">
        <label htmlFor="quote-deliveryDate">Preferred date (optional)</label>
        <input
          id="quote-deliveryDate"
          name="deliveryDate"
          type="date"
          value={form.deliveryDate}
          onChange={onChange}
          min={new Date().toLocaleDateString("en-CA")}
        />
      </div>

      <div className="quote-field quote-field-full">
        <label htmlFor="quote-additionalNotes">
          Additional notes (optional)
        </label>
        <textarea
          id="quote-additionalNotes"
          name="additionalNotes"
          rows="3"
          placeholder="Add any other relevant information"
          value={form.additionalNotes}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
