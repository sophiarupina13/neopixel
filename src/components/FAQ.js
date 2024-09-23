"use client";
import Image from "next/image";
import styles from "../app/page.module.css";
import { useState } from "react";

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState({});
  const [clickCounts, setClickCounts] = useState({});

  const toggleFAQ = (index) => {
    setClickCounts((prevClickCounts) => ({
      ...prevClickCounts,
      [index]: (prevClickCounts[index] || 0) + 1,
    }));

    setOpenIndexes((prevOpenIndexes) => ({
      ...prevOpenIndexes,
      [index]: !prevOpenIndexes[index],
    }));
  };

  const faqData = [
    {
      question: "Модель не прилипает к платформе",
      answers: [
        "Время экспозиции нижнего слоя недостаточно, увеличьте его",
        "Площадь контакта между моделью и платформой мала, отредактируйте модель",
        "Плохое выравнивание, проведите повторную калибровку",
        "Возможно образование эффекта присоски, когда модель слишком сильно прилипает к пленке, создавая вакуум, что срывает ее с платформы",
      ],
    },
    {
      question: "Ошибка печати",
      answers: [
        "Если пленка FEP недостаточно плотная или поврежденная, то ее необходимо заменить",
        "Печатная платформа или ванна не затянуты, устраните дефекты",
        "Необходимо заменить экран-маску",
      ],
    },
    {
      question: "Экран-маска не работает",
      answers: [
        "Проверьте шлейф соединения с платой. Контакт отсутствует и не выводится изображение",
        "Проверьте файл через программу UV Tools. Файл может быть нарушен или некорректно сохранен. Отформатируйте флешку и сохраните заново",
        "Запустите тестовую печать без ванны и платформы. В случае, если не помогли вышеперечисленные комментарии, замените экран",
        "Время экспозиции слоев выставлено некорректно",
        "Недостаточное количество слоев основания, увеличьте до 3-5",
      ],
    },
    {
      question: "Модель расслаивается или образуются дыры",
      answers: [
        "Время экспозиции основных слоев недостаточно, увеличьте его",
        "Возможен эффект присоски, добавьте сливные отверстия в модель, используя слайсер (если модель пустотелая)",
        "Проверьте светодиодный модуль матрицы на исправность всех диодов",
        "Экран-маска выгорел. Необходимо провести замену",
        "Проверьте правильность закрепления стальной пластины",
        "Проверьте механику устройства. Возможно, компоненты требуют замены",
      ],
    },
  ];

  return (
    <section className={styles.sectionFAQ}>
      <div className={styles.FAQ}>
        <h2>ОТВЕТЫ НА ВОПРОСЫ</h2>
        <ul className={styles.FAQList}>
          {faqData.map((item, index) => (
            <li className={styles.FAQText} key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className={styles.FAQNotButton}
              >
                <div className={styles.FAQTextOpen}>
                  <h3>{item.question}</h3>
                  <div>
                    <Image
                      src="/img/arrow-down.png"
                      alt="arrow-down"
                      width={60}
                      height={30}
                      className={`${styles.arrow2} ${
                        clickCounts[index] % 2 === 1
                          ? styles.rotated
                          : styles.rotatedBack
                      }`}
                    />
                  </div>
                </div>
              </button>
              {}
              {openIndexes[index] && (
                <ul className={styles.FAQAnswers}>
                  {item.answers.map((answer, i) => (
                    <li key={i}>
                      <p>{answer}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.warning}>
        *Большая часть проблем связана с фотополимером. Смените смолу на более
        новую или рекомендованную производителем.
      </p>
    </section>
  );
};

export default FAQ;
