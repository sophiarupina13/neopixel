"use client";
import { useState } from "react";
import styles from "../../../app/page.sapphire.module.css";

const Interface = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <section className={styles.sectionInterface} id="interface">
        <h2>ПОНЯТНЫЙ ИНТЕРФЕЙС<br></br>УПРАВЛЕНИЯ</h2>
        <p>Позволит ускорить процесс обмена данными и сделать вашу работу еще комфортнее. Не имея опыта и знаний о данном виде печати, вы беспрепятственно сможете приступить к работе после ознакомления инструкции</p>
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

export default Interface;
