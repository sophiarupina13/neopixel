"use client";

import styles from "../../../app/page.heliodorus.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Main = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className={styles.sectionMain} id="main">
      <div className={styles.mainContent}>
        <div className={styles.mainText}>
          <div>
            <h1>
              NEOPIXEL <span className={styles.yellow}>HELIODORUS</span>
            </h1>
            <p>
            Фотополимерный 3D принтер повышенной<br></br>точности NeоPixel
            </p>
          </div>
          <div className={styles.mainButton}>
          <button onClick={() => setIsPopupOpen(true)}>Заказать</button>

          {isPopupOpen && (
            <div className={styles.popupOverlay} onClick={closePopup}>
              <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <h2>СДЕЛАТЬ ПРЕДЗАКАЗ ПРЯМО СЕЙЧАС</h2>
                <form className={styles.popupForm}>
                  <div>
                    <input
                    className={styles.popupFormInput}
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    required />
                    <input
                    className={styles.popupFormInput}
                    placeholder="Имя"
                    type="text"
                    name="name"
                    required />
                    <input
                    className={styles.popupFormInput}
                    placeholder="Телефон"
                    type="tel"
                    name="phone"
                    required />
                  </div>
                  <button id={styles.popupFormButton} type="submit">Оставить заявку</button>
                  <p>
                    Я соглашаюсь на обработку <a>персональных данных</a>
                  </p>
                </form>
              </div>
            </div>
          )}
          </div>
        </div>
        <div className={styles.mainBorder}></div>
        <ul>
          <li>
          <Link href="/printers/sapphire" legacyBehavior>
            <a>
            <Image 
              src="/img/sapphire.png"
              alt="sapphire"
              width={140}
              height={150}
              className={styles.mainPrinter}/>
            <p>SAPPHIRE</p>
            </a>
            </Link>
          </li>
          <li>
          <Link href="/printers/ruby" legacyBehavior>
          <a>
            <Image 
              src="/img/ruby.png"
              alt="heliodorus"
              width={90}
              height={150}
              className={styles.mainPrinter}/>
            <p>RUBY</p>
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Main;
