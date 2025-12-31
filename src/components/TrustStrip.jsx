import { FaHardHat, FaTools, FaClock, FaHandshake } from "react-icons/fa";
import styles from "../styles/TrustStrip.module.css";

export default function TrustStrip() {
  return (
    <section className={styles.trust}>
      <div className={styles.item}>
        <FaHardHat className={styles.icon} />
        <div className={styles.text}>10+ Years Experience</div>
      </div>

      <div className={styles.item}>
        <FaTools className={styles.icon} />
        <div className={styles.text}>Quality Materials</div>
      </div>

      <div className={styles.item}>
        <FaClock className={styles.icon} />
        <div className={styles.text}>On-Time Delivery</div>
      </div>

      <div className={styles.item}>
        <FaHandshake className={styles.icon} />
        <div className={styles.text}>Client-Focused Work</div>
      </div>
    </section>
  );
}
