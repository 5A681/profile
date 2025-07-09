import styles from "./ProfileContent.module.css";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import youtubeIcon from "../../assets/youtube.png";
import phoneIcon from "../../assets/phone.png";
import emailIcon from "../../assets/mail.png";

export default function ProfileContent() {
  const contacts = [
    {
      name: "LINKEDIN",
      image: linkedinIcon,
      url: "https://www.linkedin.com/in/phongphat-srithong-33aa9a1ba/",
    },
    {
      name: "GITHUB",
      image: githubIcon,
      url: "https://github.com/5A681",
    },
    {
      name: "YOUTUBE",
      image: youtubeIcon,
      url: "",
    },
    {
      name: "085-870-3952",
      image: phoneIcon,
      url: "",
    },
    {
      name: "heartboxengineer@gmail.com",
      image: emailIcon,
      url: "",
    },
  ];

  return (
    <>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello My Name Phongphat Srithong</p>

        <div className={styles.skillsGrid}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.skillCard}
            >
              <div className={styles.skillImageContainer}>
                <img
                  src={contact.image}
                  alt={contact.name}
                  className={styles.skillImage}
                />
              </div>
              <span className={styles.skillName}>{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
