import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div>brand</div>
        <div>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
