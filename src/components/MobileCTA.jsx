import styles from "../styles/MobileCTA.module.css";

export default function MobileCTA() {
  return (
    <div className={styles.mobileCta}>
      <a href="tel:+919999999999" className={styles.call}>
        Call
      </a>
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
      >
        WhatsApp
      </a>
    </div>
  );
}
