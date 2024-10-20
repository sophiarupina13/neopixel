"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../app/page.module.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuClass, setMenuClass] = useState(styles.mobileMenu);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["main", "printers", "events", "contacts"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (
            scrollPosition >= top + window.scrollY &&
            scrollPosition <= bottom + window.scrollY
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    setMenuClass(styles.mobileMenuOpen);
  };

  const closeMenu = () => {
    setMenuClass(styles.mobileMenu);
  };

  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior>
        <a>
          <Image
            alt="logo"
            src="/img/logo.svg"
            className={styles.logo}
            width={50}
            height={50}
          />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link
          href="#main"
          className={`${styles.navLink} ${
            activeSection === "main" ? styles.active : ""
          }`}
        >
          Главная
        </Link>
        <Link
          href="#printers"
          className={`${styles.navLink} ${
            activeSection === "printers" ? styles.active : ""
          }`}
        >
          Принтеры
        </Link>
        <Link
          href="#events"
          className={`${styles.navLink} ${
            activeSection === "events" ? styles.active : ""
          }`}
        >
          Мероприятия
        </Link>
        <Link
          href="#contacts"
          className={`${styles.navLink} ${
            activeSection === "contacts" ? styles.active : ""
          }`}
        >
          Контакты
        </Link>
      </nav>
      <button className={styles.menu} onClick={() => openMenu()}>
        <Image width={20} height={20} alt="menu" src={"/img/menu.png"}/>
      </button>
      <div className={menuClass} onClick={() => closeMenu()}>
      <nav className={styles.mobileNav}>
        <Link
          href="#main"
          className={`${styles.navLink} ${
            activeSection === "main" ? styles.active : ""
          }`}
        >
          Главная
        </Link>
        <Link
          href="#printers"
          className={`${styles.navLink} ${
            activeSection === "printers" ? styles.active : ""
          }`}
        >
          Принтеры
        </Link>
        <Link
          href="#events"
          className={`${styles.navLink} ${
            activeSection === "events" ? styles.active : ""
          }`}
        >
          Мероприятия
        </Link>
        <Link
          href="#contacts"
          className={`${styles.navLink} ${
            activeSection === "contacts" ? styles.active : ""
          }`}
        >
          Контакты
        </Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;
