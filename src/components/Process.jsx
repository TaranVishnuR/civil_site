import styles from "../styles/Process.module.css";

export default function Process() {
  return (
    <section className={styles.process}>
      <h2>Our Work Process</h2>
      <p className={styles.subtext}>
        A transparent, step-by-step approach that ensures quality and peace of mind.
      </p>

      <div className={styles.steps}>
        <div className={styles.step}>
          <span>01</span>
          <h3>Planning</h3>
          <p>Understanding requirements, site inspection, and cost estimation.</p>
        </div>

        <div className={styles.step}>
          <span>02</span>
          <h3>Design</h3>
          <p>Architectural planning, 3D layouts, and material selection.</p>
        </div>

        <div className={styles.step}>
          <span>03</span>
          <h3>Build</h3>
          <p>Execution with skilled workforce, quality checks, and timelines.</p>
        </div>

        <div className={styles.step}>
          <span>04</span>
          <h3>Handover</h3>
          <p>Final inspection, cleanup, and smooth project handover.</p>
        </div>
      </div>
    </section>
  );
}
