import { useEffect, useRef } from "react";
import styles from "../styles/ServicesPage.module.css";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Process from "../components/Process";
import SEO from "../components/SEO";

export default function ServicesPage() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <SEO
        title="Construction Services in Pollachi | Sri Adhiya Builders"
        description="Residential construction, commercial buildings, renovations, and interior works by Sri Adhiya Builders."
      />

      {/* PROCESS */}
      <div ref={addToRefs} className={styles.reveal}>
        <Process />
      </div>

      {/* HERO */}
      <section ref={addToRefs} className={`${styles.hero} ${styles.reveal}`}>
        <h1>Our Services</h1>
        <p>
          End-to-end construction solutions delivered with quality,
          transparency, and on-time execution.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section
        ref={addToRefs}
        className={`${styles.servicesSection} ${styles.reveal}`}
      >
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
