"use client";

import styles from "../app/page.module.css";
import { useState } from "react";

const Main = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className={styles.sectionMain} id="main">
      {}
      <video
        autoPlay
        loop
        muted
        className={styles.backgroundVideo}>
        <source src="/vid/demo.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div className={styles.mainText}>
        <h1>
          ТОЧНОСТЬ. <span className={styles.blue}>ПРЕВОСХОДСТВО.</span>
          <br />
          ТЕХНОЛОГИЧНОСТЬ
        </h1>
        <p>
          Первый отечественный фотополимерный 3D-принтер повышенной точности
        </p>
      </div>
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
              <button type="submit">Оставить заявку</button>
              <p>
                Я соглашаюсь на обработку <a>персональных данных</a>
              </p>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default Main;
