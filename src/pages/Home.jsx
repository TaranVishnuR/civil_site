import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import ProjectGallery from "../components/ProjectGallery";
import TrustBooster from "../components/TrustBooster";
import SEO from "../components/SEO";

export default function Home() {
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
        title="Sri Adhiya Builders | Trusted Builders in Pollachi"
        description="Sri Adhiya Builders offers residential, commercial, and renovation services in Pollachi with quality construction and on-time delivery."
      />

      {/* HERO */}
      <section ref={addToRefs} className={`${styles.hero} ${styles.reveal}`}>
        <div className={styles.content}>
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

      <div ref={addToRefs} className={styles.reveal}>
        <TrustStrip />
      </div>

      <div ref={addToRefs} className={styles.reveal}>
        <ProjectGallery />
      </div>

      <div ref={addToRefs} className={`${styles.linkWrap} ${styles.reveal}`}>
        <Link to="/projects" className={styles.sectionLink}>
          View All Projects →
        </Link>
      </div>

      <div ref={addToRefs} className={styles.reveal}>
        <TrustBooster />
      </div>

      <div ref={addToRefs} className={styles.reveal}>
        <Services />
      </div>

      <div ref={addToRefs} className={`${styles.linkWrap} ${styles.reveal}`}>
        <Link to="/services" className={styles.sectionLink}>
          Explore All Services →
        </Link>
      </div>

      <section ref={addToRefs} className={`${styles.mapSection} ${styles.reveal}`}>
        <h2>Visit Our Office</h2>
        <p>Captain City, Udumalai Road, Pollachi – Tamil Nadu</p>

        <div className={styles.mapWrap}>
          <iframe
            title="Sri Adhiya Builders Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.061193473054!2d77.04425111656268!3d10.658730301130378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8370069326ecd%3A0x7262e3f666ee33b8!2sSri%20adhiya%20builders!5e0!3m2!1sen!2sin!4v1767365676638!5m2!1sen!2sin"
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
