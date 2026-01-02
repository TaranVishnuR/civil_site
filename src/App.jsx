import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar.jsx";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <MobileNavbar />
    </>
  );
}
