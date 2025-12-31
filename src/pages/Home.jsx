import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import ProjectGallery from "../components/ProjectGallery";
import TrustBooster from "../components/TrustBooster";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Sri Adhiya Builders | Trusted Builders in Pollachi"
        description="Sri Adhiya Builders offers residential, commercial, and renovation services in Pollachi with quality construction and on-time delivery."
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.content} data-aos="fade-up">
          <h1>
            Built Right <br />
            <span>From Foundation to Finish</span>
          </h1>

          <p>
            Sri Adhiya Builders delivers reliable residential and commercial
            construction with 10+ years of experience, quality materials,
            and on-time completion.
          </p>

          <div className={styles.actions}>
            <a href="tel:+919842238373" className={styles.primaryBtn}>
              Call Now
            </a>

            <a
              href="https://wa.me/919842238373?text=Hi%20I%20am%20interested%20in%20construction%20services"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryBtn}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div data-aos="fade-in">
        <TrustStrip />
      </div>

      {/* PROJECTS (only 3 showcase images inside ProjectGallery) */}
      <div data-aos="zoom-in">
        <ProjectGallery />
      </div>

      <div className={styles.linkWrap} data-aos="fade-up">
        <Link to="/projects" className={styles.sectionLink}>
          View All Projects →
        </Link>
      </div>

      {/* TRUST BOOSTER */}
      <div data-aos="fade-up">
        <TrustBooster />
      </div>

      {/* SERVICES */}
      <div data-aos="fade-up">
        <Services />
      </div>

      <div className={styles.linkWrap} data-aos="fade-up">
        <Link to="/services" className={styles.sectionLink}>
          Explore All Services →
        </Link>
      </div>

      {/* MAP (KEPT) */}
      <section className={styles.mapSection} data-aos="fade-up">
        <h2>Visit Our Office</h2>
        <p>Captain City, Udumalai Road, Pollachi – Tamil Nadu</p>

        <div className={styles.mapWrap}>
          <iframe
            title="Sri Adhiya Builders Location"
            src="https://www.google.com/maps?q=Captain%20City%20Pollachi&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        <div className={styles.linkWrap}>
          <Link to="/contact" className={styles.sectionLink}>
            Get Directions →
          </Link>
        </div>
      </section>
    </>
  );
}
