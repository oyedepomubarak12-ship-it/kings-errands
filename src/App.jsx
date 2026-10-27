
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import PageMetadata from "./components/PageMetadata";

import Home from "./pages/Home";
import Services from "./pages/Services";
import BusinessLogistics from "./pages/BusinessLogistics";
import Partnerships from "./pages/Partnerships";
import DeliveryPlans from "./pages/DeliveryPlans";
import Tracking from "./pages/Tracking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <PageMetadata />
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/business-logistics"
            element={<BusinessLogistics />}
          />
          <Route
            path="/partnerships"
            element={<Partnerships />}
          />
          <Route
            path="/delivery-plans"
            element={<DeliveryPlans />}
          />
          <Route path="/track-delivery" element={<Tracking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/request-quote" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
