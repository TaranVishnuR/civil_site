import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA */}
      <section className={styles.cta}>
        <h2>Planning to Build or Renovate?</h2>
        <p>
          Get expert guidance from Sri Adhiya Builders — from planning to
          handover.
        </p>

        <div className={styles.actions}>
          <a href="tel:+919842238373" className={styles.primaryBtn}>
            Call Now
          </a>
          <Link to="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* BOTTOM BAR */}
      <div className={styles.bottom}>
        <div className={styles.brand}>
          <img src="/assets/logo/Logo.png" alt="Sri Adhiya Builders Logo" />
          <div>
            <strong>Sri Adhiya Builders</strong>
            <span>Built Right</span>
          </div>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Sri Adhiya Builders. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
