import { useEffect, useRef } from "react";
import styles from "../styles/Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import SEO from "../components/SEO";

export default function Contact() {
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
      { threshold: 0.2 }
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
        title="Contact Sri Adhiya Builders | Builders in Pollachi"
        description="Contact Sri Adhiya Builders for construction estimates, consultations, and project discussions in Pollachi."
      />

      <section ref={addToRefs} className={`${styles.hero} ${styles.reveal}`}>
        <h1>Contact Us</h1>
        <p>
          Get in touch with Sri Adhiya Builders for consultations, estimates,
          and project discussions.
        </p>
      </section>

      <section className={`${styles.contactSection} ${styles.contactPage}`}>
        <div className={styles.infoGrid}>
          <div ref={addToRefs} className={`${styles.infoCard} ${styles.reveal} ${styles.fromRight}`}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Office Address</h3>
            <p>
              Captain City, Udumalai Road,<br />
              Pollachi, Tamil Nadu – 642003
            </p>
          </div>

          <div ref={addToRefs} className={`${styles.infoCard} ${styles.reveal} ${styles.fromLeft}`}>
            <FaPhoneAlt className={styles.icon} />
            <h3>Phone</h3>
            <p>
              <a href="tel:+919842238373" className={styles.link}>
                +91 98422 38373
              </a>
            </p>
          </div>

          <div ref={addToRefs} className={`${styles.infoCard} ${styles.reveal} ${styles.fromRight}`}>
            <FaEnvelope className={styles.icon} />
            <h3>Email</h3>
            <p>
              <a href="mailto:sriadhiyabuilders@gmail.com" className={styles.link}>
                sriadhiyabuilders@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className={`${styles.mapSection} ${styles.reveal}`}>
        <iframe
          title="Sri Adhiya Builders Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.061193473054!2d77.04425111656268!3d10.658730301130378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8370069326ecd%3A0x7262e3f666ee33b8!2sSri%20adhiya%20builders!5e0!3m2!1sen!2sin!4v1767365676638!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
