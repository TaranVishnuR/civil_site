import styles from "../styles/ServicesPage.module.css";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Process from "../components/Process";
import SEO from "../components/SEO";

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Construction Services in Pollachi | Sri Adhiya Builders"
        description="Residential construction, commercial buildings, renovations, and interior works by Sri Adhiya Builders."
      />

      {/* PROCESS (ADDED HERE) */}
      <Process />

      {/* PAGE HERO */}
      <section className={styles.hero}>
        <h1>Our Services</h1>
        <p>
          End-to-end construction solutions delivered with quality,
          transparency, and on-time execution.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className={styles.servicesSection}>
        <Services showTitle={false} />

        <div className={styles.navLinks}>
          <Link to="/projects" className={styles.sectionLink}>
            View Our Projects →
          </Link>
        </div>
      </section>
    </>
  );
}
