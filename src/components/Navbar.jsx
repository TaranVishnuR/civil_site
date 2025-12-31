import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brandWrap}>
        <img src="/assets/logo/Logo.png" alt="Sri Adhiya Builders Logo" />
        <span className={styles.brandText}>Sri Adhiya Builders</span>
      </div>

      <ul className={styles.menu}>
        {["/", "/services", "/projects", "/contact"].map((path, i) => {
          const labels = ["Home", "Services", "Projects", "Contact"];
          return (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  isActive ? styles.active : styles.link
                }
              >
                {labels[i]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
