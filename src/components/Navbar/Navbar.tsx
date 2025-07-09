import styles from "./Navbar.module.css";
import brandLogo from "../../assets/brand.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={brandLogo} alt="HEARTBOX Logo" className={styles.logo} />
          <div className={styles.brandText}>HEARTBOX</div>
        </div>
        <div>
          <ul>
            <li className={isActive("/") ? styles.active : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={isActive("/projects") ? styles.active : ""}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={isActive("/about") ? styles.active : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={isActive("/blog") ? styles.active : ""}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={isActive("/contact") ? styles.active : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
