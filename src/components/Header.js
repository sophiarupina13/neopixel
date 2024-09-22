import Link from "next/link";
import Image from "next/image";
import styles from "../app/page.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        alt="logo"
        src={"/img/logo.svg"}
        className={styles.logo}
        width={50}
        height={50}
      />
      <nav className={styles.nav}>
        <Link href="#main" className={styles.navLink}>
          Главная
        </Link>
        <Link href="#printers" className={styles.navLink}>
          Принтеры
        </Link>
        <Link href="#events" className={styles.navLink}>
          Мероприятия
        </Link>
        <Link href="#contacts" className={styles.navLink}>
          Контакты
        </Link>
      </nav>
    </header>
  );
};

export default Header;
