import styles from "./ProfileContent.module.css";

export default function ProfileContent() {
  const skills = [
    {
      name: "Golang",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
    {
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C#",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
  ];

  return (
    <>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello My Name Phongphat Srithong</p>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillImageContainer}>
                <img
                  src={skill.image}
                  alt={skill.name}
                  className={styles.skillImage}
                />
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
