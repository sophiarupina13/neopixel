import Image from "next/image";
import styles from "../../../app/page.heliodorus.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <h1>
        <span className={styles.yellow}>НЕСРАВНИМЫЙ АНАЛОГ.</span> <br />
        ДОСТУПНАЯ ЦЕНА
      </h1>
      <ul className={styles.contacts}>
        <li>
          <Image
            src="/img/phone.svg"
            alt="phone"
            width={50}
            height={50}
            className={styles.footerIcon}
          />
          <p>8-985-192-48-93</p>
        </li>
        <li>
          <Image
            src="/img/mail.svg"
            alt="mail"
            width={50}
            height={50}
            className={styles.footerIcon}
          />
          <p>maks.bogush@neopixel3d.ru</p>
        </li>
        <li>
          <Image
            src="/img/instagram.svg"
            alt="instagram"
            width={50}
            height={50}
            className={styles.footerIcon}
          />
          <p>neopixel_3d</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
