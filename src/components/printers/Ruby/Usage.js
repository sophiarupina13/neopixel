"use client";
import styles from "../../../app/page.ruby.module.css";
import { useState } from "react";
import Image from "next/image";

const pictures = [
  {
    id: 1,
    image: "/img/printers/usage_1.png",
    sphere: "Ювелирное дело",
  },
  {
    id: 2,
    image: "/img/printers/usage_2.png",
    sphere: "Стоматология",
  },
  {
    id: 3,
    image: "/img/printers/usage_3.png",
    sphere: "Машиностроение",
  },
  {
    id: 4,
    image: "/img/printers/usage_4.png",
    sphere: "Медицина",
  },
  {
    id: 5,
    image: "/img/printers/usage_5.png",
    sphere: "Автомобилестроение",
  },
  {
    id: 6,
    image: "/img/printers/usage_6.png",
    sphere: "Архитектура",
  },
  {
    id: 7,
    image: "/img/printers/usage_7.png",
    sphere: "Прототипирование",
  },
  {
    id: 8,
    image: "/img/printers/usage_8.png",
    sphere: "Текстильная промышленность",
  },
  {
    id: 9,
    image: "/img/printers/usage_9.png",
    sphere: "Обувная промышленность",
  },
];

const Usage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    } else if (direction === "right" && currentIndex < pictures.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const visiblePictures = pictures.slice(currentIndex, currentIndex + 3);

  return (
    <section className={styles.sectionUsage} id="usage">
      <div>
        <h2>СФЕРЫ ПРИМЕНЕНИЯ</h2>
        <div className={styles.border}></div>
      </div>
      <ul className={styles.picturesList}>
        {visiblePictures.map((picture) => (
          <li key={picture.id}>
            <Image
              src={picture.image}
              alt="photo gallery"
              width={470}
              height={380}
              className={styles.usageImage}
            />
            <h3>{picture.sphere}</h3>
          </li>
        ))}
      </ul>
      <div className={styles.scrollers}>
        <button onClick={() => handleScroll("left")}>
          <Image
            src="/img/arrow-left.png"
            alt="arrow-left"
            width={40}
            height={60}
            className={styles.arrow1}
          />
        </button>
        <button onClick={() => handleScroll("right")}>
          <Image
            src="/img/arrow-right.png"
            alt="arrow-right"
            width={40}
            height={60}
            className={styles.arrow1}
          />
        </button>
      </div>
    </section>
  );
};

export default Usage;
