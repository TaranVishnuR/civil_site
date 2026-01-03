import { useState, useEffect, useRef } from "react";
import styles from "../styles/Project.module.css";

/* IMAGE DATA */
const exteriorImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/assets/projects/exterior/ext${i + 1}.jpeg`,
  type: "exterior",
}));

const interiorImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/assets/projects/interior/int${i + 1}.jpeg`,
  type: "interior",
}));

const allImages = [...exteriorImages, ...interiorImages];

export default function Project() {
  const [filter, setFilter] = useState("all");
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

  const filteredImages =
    filter === "all"
      ? allImages
      : allImages.filter(img => img.type === filter);

  return (
    <>
      {/* HERO */}
      <section ref={addToRefs} className={`${styles.hero} ${styles.reveal}`}>
        <h1>Our Projects</h1>
        <p>
          A showcase of residential, commercial, and interior works delivered
          by Sri Adhiya Builders.
        </p>
      </section>

      {/* FILTERS */}
      <div ref={addToRefs} className={`${styles.filters} ${styles.reveal}`}>
        <button
          className={`${styles.filterBtn} ${filter === "all" ? styles.active : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={`${styles.filterBtn} ${filter === "exterior" ? styles.active : ""}`}
          onClick={() => setFilter("exterior")}
        >
          Exterior Works
        </button>

        <button
          className={`${styles.filterBtn} ${filter === "interior" ? styles.active : ""}`}
          onClick={() => setFilter("interior")}
        >
          Interior Works
        </button>
      </div>

      {/* GALLERY */}
      <section className={styles.gallery}>
        {filteredImages.map((img, index) => (
          <div
            key={index}
            ref={addToRefs}
            className={`${styles.card} ${styles.reveal}`}
          >
            <img
              src={img.src}
              alt={`Sri Adhiya Builders Project ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </section>
    </>
  );
}
