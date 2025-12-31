import styles from "../styles/ProjectGallery.module.css";

const showcaseImages = [
  "/assets/projects/exterior/ext1.jpeg",
  "/assets/projects/exterior/ext2.jpeg",
  "/assets/projects/exterior/ext3.jpeg",
  "/assets/projects/exterior/ext4.jpeg",
];

export default function ProjectGallery() {
  return (
    <section className={styles.gallery}>
      <h2>Our Recent Works</h2>
      <p className={styles.subtext}>
        A glimpse of our recently completed projects.
      </p>

      <div className={styles.grid}>
        {showcaseImages.map((src, index) => (
          <div key={index} className={styles.card}>
            <img src={src} alt={`Project ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
