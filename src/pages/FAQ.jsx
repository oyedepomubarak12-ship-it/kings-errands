
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Search,
  MessageCircle,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./FAQ.css";

const faqItems = [
  {
    category: "Services",
    question: "What services does Kings Errands & Logistics offer?",
    answer:
      "The website presents logistics and delivery, parcel delivery, errand services, storage and handling enquiries, and business logistics. Actual availability should be confirmed with the business.",
  },
  {
    category: "Delivery",
    question: "How do I request a delivery?",
    answer:
      "Open the Request a Quote page, provide your contact details, collection location, destination, and package or errand details. The current form is a frontend demo and does not transmit your request.",
  },
  {
    category: "Tracking",
    question: "How can I track my delivery?",
    answer:
      "Open the Track Delivery page and enter one of its demonstration tracking references. The current examples are not connected to live shipment records.",
  },
  {
    category: "Tracking",
    question: "Why is my tracking number not showing a result?",
    answer:
      "The current tracking page uses a limited set of demonstration references. A live tracking service will require a backend with real shipment records.",
  },
  {
    category: "Pricing",
    question: "How much does delivery cost?",
    answer:
      "Prices can depend on the service and delivery requirements. Submit a quote enquiry to describe what you need; final pricing must be confirmed by the business.",
  },
  {
    category: "Delivery",
    question: "Can I arrange delivery to another city?",
    answer:
      "Enter the collection and destination locations in your enquiry. The business must confirm whether the requested route is supported.",
  },
  {
    category: "Business",
    question: "Do you support business deliveries?",
    answer:
      "The website includes a Business Logistics page for businesses to describe their delivery requirements and make an enquiry.",
  },
  {
    category: "Business",
    question: "Can my business discuss recurring deliveries?",
    answer:
      "Yes, you can describe recurring delivery requirements through the business enquiry or contact pages. Any agreement, schedule, and pricing must be confirmed by the business.",
  },
  {
    category: "Partnerships",
    question: "How can I discuss a partnership?",
    answer:
      "Visit the Partnerships page or use the Contact page to explain your proposal. The current frontend does not submit enquiries to a server.",
  },
  {
    category: "Errands",
    question: "Can I request help with an errand?",
    answer:
      "Choose Errand Services on the quote form and describe the task. The business will need to confirm whether it can accommodate the request.",
  },
  {
    category: "Storage",
    question: "Can I ask about storage and goods handling?",
    answer:
      "Select Storage & Handling on the quote form or contact the business with your requirements. Storage availability and terms have not yet been configured on this demo website.",
  },
  {
    category: "Website",
    question: "Does the website currently send messages to the company?",
    answer:
      "No. The contact and quote forms are frontend demonstrations. They validate input and display a confirmation, but do not send or store information until a backend is connected.",
  },
];

const categories = [
  "All questions",
  "Services",
  "Delivery",
  "Tracking",
  "Pricing",
  "Business",
  "Partnerships",
  "Errands",
  "Storage",
  "Website",
];

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All questions");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFAQs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return faqItems.filter((item) => {
      const matchesCategory =
        category === "All questions" || item.category === category;

      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  function handleCategoryChange(nextCategory) {
    setCategory(nextCategory);
    setOpenIndex(0);
  }

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="faq-container">
          <span className="faq-eyebrow">HELP &amp; SUPPORT</span>
          <h1>Frequently asked questions</h1>
          <p>
            Find answers about our services, delivery requests, tracking, and
            business enquiries.
          </p>

          <label className="faq-search" htmlFor="faq-search-input">
            <Search size={20} />
            <input
              id="faq-search-input"
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setOpenIndex(0);
              }}
              placeholder="Search questions..."
            />
          </label>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          <div className="faq-category-list" aria-label="FAQ categories">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={`faq-category ${
                  category === item ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(item)}
                aria-pressed={category === item}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="faq-results-heading">
            <div>
              <span className="faq-eyebrow">QUICK ANSWERS</span>
              <h2>Your questions, answered</h2>
            </div>
            <span className="faq-results-count">
              {filteredFAQs.length}{" "}
              {filteredFAQs.length === 1 ? "question" : "questions"}
            </span>
          </div>

          {filteredFAQs.length > 0 ? (
            <div className="faq-list">
              {filteredFAQs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    className={`faq-item ${isOpen ? "open" : ""}`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">
                        <span className="faq-question-category">
                          {item.category}
                        </span>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className="faq-chevron"
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="faq-empty">
              <Search size={28} />
              <h3>No matching questions</h3>
              <p>Try another search term or choose a different category.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All questions");
                  setOpenIndex(0);
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          <div className="faq-contact-card">
            <span className="faq-contact-icon">
              <MessageCircle size={24} />
            </span>
            <div className="faq-contact-copy">
              <h2>Still have a question?</h2>
              <p>
                Send an enquiry or provide your delivery details to get started.
              </p>
            </div>
            <div className="faq-contact-actions">
              <Link to="/contact">
                Contact us <ArrowRight size={16} />
              </Link>
              <Link to="/request-quote">
                <Package size={16} /> Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
