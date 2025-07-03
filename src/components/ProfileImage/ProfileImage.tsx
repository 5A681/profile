import styles from "./ProfileImage.module.css";
import profile from "../../assets/profile.png";

export default function ProfileImage() {
  return (
    <>
      <div className={styles.experienceSection}>
        <div className={styles.experienceContent}>
          <h2 className={styles.experienceTitle}>
            Software Development Experience
          </h2>
          <div className={styles.experienceText}>
            <p className={styles.experienceHighlight}>
              3 Years of Excellence in Software Development
            </p>
            <p className={styles.experienceDescription}>
              Passionate software developer with 3 years of hands-on experience
              in building robust and scalable applications. Specialized in
              modern programming languages including Golang, Java, C#,
              TypeScript, Python, and C.
            </p>
            <div className={styles.experienceDetails}>
              <div className={styles.experienceItem}>
                <span className={styles.experienceLabel}>
                  Backend Development:
                </span>
                <span className={styles.experienceValue}>
                  Expert in server-side architecture and API design
                </span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceLabel}>
                  Full-Stack Solutions:
                </span>
                <span className={styles.experienceValue}>
                  End-to-end application development
                </span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceLabel}>Code Quality:</span>
                <span className={styles.experienceValue}>
                  Clean code practices and testing methodologies
                </span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.experienceLabel}>Problem Solving:</span>
                <span className={styles.experienceValue}>
                  Complex technical challenges and optimization
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileImageContainer}>
          <div className={styles.profileImage}>
            <img src={profile} alt="Profile" className={styles.image} />
          </div>
        </div>
      </div>
    </>
  );
}
