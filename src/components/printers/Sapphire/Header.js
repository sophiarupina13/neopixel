"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../../app/page.sapphire.module.css";
import classNames from 'classnames';

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["main", "characteristics", "usage", "examples", "contacts"];
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

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={classNames(styles.header, { [styles.transparent]: isTop })}>
      <Link href="/" legacyBehavior>
      <a>
      <Image
        alt="logo"
        src="/img/logo_sapphire.svg"
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
          href="#characteristics"
          className={`${styles.navLink} ${
            activeSection === "characteristics" ? styles.active : ""
          }`}
        >
          Характеристики
        </Link>
        <Link
          href="#usage"
          className={`${styles.navLink} ${
            activeSection === "usage" ? styles.active : ""
          }`}
        >
          Применение
        </Link>
        <Link
          href="#examples"
          className={`${styles.navLink} ${
            activeSection === "examples" ? styles.active : ""
          }`}
        >
          Примеры
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
    </header>
  );
};

export default Header;