import { useEffect, useRef } from "react";
import styles from "../styles/Process.module.css";

export default function Process() {
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
    <section ref={addToRefs} className={`${styles.process} ${styles.reveal}`}>
      <h2>Our Work Process</h2>
      <p className={styles.subtext}>
        A transparent, step-by-step approach that ensures quality and peace of mind.
      </p>

      <div className={styles.steps}>
        {["Planning", "Design", "Build", "Handover"].map((title, i) => (
          <div key={i} ref={addToRefs} className={`${styles.step} ${styles.reveal}`}>
            <span>{`0${i + 1}`}</span>
            <h3>{title}</h3>
            <p>
              {[
                "Understanding requirements, site inspection, and cost estimation.",
                "Architectural planning, 3D layouts, and material selection.",
                "Execution with skilled workforce, quality checks, and timelines.",
                "Final inspection, cleanup, and smooth project handover."
              ][i]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
