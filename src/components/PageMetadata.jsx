
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageMetadata = {
  "/": {
    title: "Kings Errands & Logistics | Delivery & Errand Services",
    description:
      "Explore delivery, logistics, and errand services from Kings Errands & Logistics.",
  },
  "/services": {
    title: "Our Services | Kings Errands & Logistics",
    description:
      "Explore the logistics, parcel delivery, and errand services offered by Kings Errands & Logistics.",
  },
  "/business-logistics": {
    title: "Business Logistics | Kings Errands & Logistics",
    description:
      "Learn about logistics support options for businesses and organisations.",
  },
  "/partnerships": {
    title: "Partnerships | Kings Errands & Logistics",
    description:
      "Explore potential partnership opportunities with Kings Errands & Logistics.",
  },
  "/delivery-plans": {
    title: "Delivery Plans | Kings Errands & Logistics",
    description:
      "Explore delivery plan information from Kings Errands & Logistics.",
  },
  "/track-delivery": {
    title: "Track Delivery | Kings Errands & Logistics",
    description:
      "Visit the delivery tracking page for Kings Errands & Logistics.",
  },
  "/about": {
    title: "About Us | Kings Errands & Logistics",
    description:
      "Learn more about Kings Errands & Logistics and its services.",
  },
  "/contact": {
    title: "Contact Us | Kings Errands & Logistics",
    description:
      "Find the contact form for Kings Errands & Logistics enquiries.",
  },
  "/faq": {
    title: "Frequently Asked Questions | Kings Errands & Logistics",
    description:
      "Find answers to common questions about Kings Errands & Logistics.",
  },
  "/request-quote": {
    title: "Request a Quote | Kings Errands & Logistics",
    description:
      "Submit a quote enquiry for logistics and delivery services.",
  },
};

export default function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || {
      title: "Page Not Found | Kings Errands & Logistics",
      description:
        "The requested page could not be found on Kings Errands & Logistics.",
    };

    document.title = metadata.title;

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute("content", metadata.description);
  }, [pathname]);

  return null;
}
