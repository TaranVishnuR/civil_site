import styles from "../styles/Services.module.css";

export default function Services({ showTitle = true }) {
  return (
    <section className={styles.services}>
      {showTitle && (
        <>
          <h2>Our Services</h2>
          <p className={styles.subtext}>
            End-to-end construction solutions delivered with quality and precision.
          </p>
        </>
      )}

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Residential Construction</h3>
          <p>
            Independent houses, villas, and apartments built with premium
            materials and expert workmanship.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Commercial Construction</h3>
          <p>
            Offices, shops, and commercial buildings designed for durability,
            compliance, and functionality.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Renovation</h3>
          <p>Complete renovation from planning to final handover.</p>
        </div>

        <div className={styles.card}>
          <h3>Interior Works</h3>
          <p>
            Modern interior solutions including modular kitchens, wardrobes,
            false ceilings, and custom finishes.
          </p>
        </div>
      </div>
    </section>
  );
}
