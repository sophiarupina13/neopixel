"use client";
import { useState } from "react";
import styles from "../../../app/page.ruby.module.css";

const Quality = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className={styles.sectionQuality} id="quality">
        <h2>ПРЕМИАЛЬНОЕ КАЧЕСТВО<br></br>ПЕЧАТИ</h2>
        <p>4K Mono LCD обеспечивает беспрецедентный уровень качества получаемого изделия</p>
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
    </section>
  );
};

export default Quality;
