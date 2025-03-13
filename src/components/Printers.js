"use client";
import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Printers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const printers = [
    {
      name: "Ruby (R Lite / R Pro)",
      image: "/img/ruby.png",
      link: "/printers/ruby",
      className: styles.printer1
    },
    {
      name: "Sapphire (S Lite / S Pro)",
      image: "/img/sapphire.png",
      link: "/printers/sapphire",
      className: styles.printer2
    },
    {
      name: "Heliodorus (H Lite / H Pro)",
      image: "/img/heliodorus.png",
      link: "/printers/heliodorus",
      className: styles.printer3
    }
  ];

  const handleScroll = (direction) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < printers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 1000);
    };

    updateView();

    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <section className={styles.sectionPrinters} id="printers">
      <div className={styles.printersText}>
        <h2>СФЕРЫ ПРИМЕНЕНИЯ</h2>
        <div className={styles.printersDescription}>
          <p>
            Фотополимерная печать используется в тех отраслях, где подходит по
            следующим факторам: качество, точность построения, физические
            свойства и максимальные габариты создаваемого изделия
          </p>
          <ul className={styles.industriesList}>
            <li><p>ювелирное дело</p></li>
            <li><p>стоматология</p></li>
            <li><p>машиностроение</p></li>
            <li><p>медицина</p></li>
            <li><p>автомобилестроение</p></li>
            <li><p>архитектура</p></li>
            <li><p>прототипирование</p></li>
            <li><p>текстильная промышленность</p></li>
            <li><p>обувная промышленность</p></li>
          </ul>
        </div>
      </div>

      <div className={styles.printersPrinters}>
        {isMobileView && (
          <button onClick={() => handleScroll("left")} disabled={currentIndex === 0} className={styles.arrowsMobile}>
            <Image
              src="/img/arrow-left.png"
              alt="arrow-left"
              width={40}
              height={60}
              className={styles.arrow1Printers}
            />
          </button>
        )}
        
        <ul className={styles.printersList}>
          {isMobileView ? (
            <li className={styles.printersListEl}>
              <Image
                className={printers[currentIndex].className}
                alt={`${printers[currentIndex].name}-printer`}
                src={printers[currentIndex].image}
                width={10000}
                height={15000}
              />
              <h3>{printers[currentIndex].name}</h3>
              <div>
                <Link href={printers[currentIndex].link} legacyBehavior>
                  <a className={styles.moreLink}>Подробнее</a>
                </Link>
                <button onClick={() => setIsPopupOpen(true)}>Заказать</button>
              </div>
            </li>
          ) : (
            printers.map((printer, index) => (
              <li key={index} className={styles.printersListEl}>
                <Image
                  className={printer.className}
                  alt={`${printer.name}-printer`}
                  src={printer.image}
                  width={10000}
                  height={15000}
                />
                <h3>{printer.name}</h3>
                <div>
                  <Link href={printer.link} legacyBehavior>
                    <a className={styles.moreLink}>Подробнее</a>
                  </Link>
                  <button onClick={() => setIsPopupOpen(true)}>Заказать</button>
                </div>
              </li>
            ))
          )}
        </ul>
        {isMobileView && (
          <button onClick={() => handleScroll("right")} disabled={currentIndex === printers.length - 1} className={styles.arrowsMobile}>
            <Image
              src="/img/arrow-right.png"
              alt="arrow-right"
              width={40}
              height={60}
              className={styles.arrow1Printers}
            />
          </button>
        )}
      </div>
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

export default Printers;
