import { NavLink } from "react-router-dom";
import { FaHome, FaTools, FaProjectDiagram, FaPhoneAlt } from "react-icons/fa";
import styles from "../styles/MobileNavbar.module.css";

export default function MobileNavbar() {
  return (
    <nav className={styles.mobileNav}>
      {[
        { to: "/", icon: <FaHome />, label: "Home" },
        { to: "/services", icon: <FaTools />, label: "Services" },
        { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
        { to: "/contact", icon: <FaPhoneAlt />, label: "Contact" },
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) =>
            isActive ? styles.active : styles.item
          }
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
