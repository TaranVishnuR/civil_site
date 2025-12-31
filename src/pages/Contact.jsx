import styles from "../styles/Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Sri Adhiya Builders | Builders in Pollachi"
        description="Contact Sri Adhiya Builders for construction estimates, consultations, and project discussions in Pollachi."
      />

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>
          Get in touch with Sri Adhiya Builders for consultations, estimates,
          and project discussions.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section className={styles.contactSection}>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Office Address</h3>
            <p>
              Captain City, Udumalai Road,<br />
              Pollachi, Tamil Nadu – 642003
            </p>
          </div>

          <div className={styles.infoCard}>
            <FaPhoneAlt className={styles.icon} />
            <h3>Phone</h3>
            <p>
              <a href="tel:+919842238373" className={styles.link}>
                +91 98422 38373
              </a>
            </p>
          </div>

          <div className={styles.infoCard}>
            <FaEnvelope className={styles.icon} />
            <h3>Email</h3>
            <p>
              <a
                href="mailto:sriadhiyabuilders@gmail.com"
                className={styles.link}
              >
                sriadhiyabuilders@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles.mapSection}>
        <iframe
          title="Sri Adhiya Builders Location"
          src="https://www.google.com/maps?q=Captain%20City%20Pollachi&output=embed"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
