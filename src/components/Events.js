"use client";
import styles from "../app/page.module.css";
import { useState } from "react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Фестиваль детства и юности «Большая перемена»",
    date: "1 июня 2021",
    description: "Участие в выставочной зоне инициативных проектов",
    image: "/img/photo_1.png",
  },
  {
    id: 2,
    title: "Фестиваль науки и технологий «Техносреда»",
    date: "25-26 сентября 2021",
    description: "Презентация разработок в зоне вузов фестиваля",
    image: "/img/photo_2.png",
  },
  {
    id: 3,
    title: "Geek Picnic – международный фестиваль науки и технологий",
    date: "2 октября 2021",
    description: "Участие в экспозиции фестиваля",
    image: "/img/photo_3.png",
  },
  {
    id: 4,
    title: "Всероссийский фестиваль NAUKA 0+",
    date: "9-10 октября 2021",
    description: "Участие в выставочной зоне университета",
    image: "/img/photo_4.png",
  },
  {
    id: 5,
    title: "Nobel Vision. Open Innovations 2.0",
    date: "7 декабря 2021",
    description: "Участие в выставочной зоне Министерства образования",
    image: "/img/photo_5.png",
  },
  {
    id: 6,
    title: "День открытых дверей",
    date: "2 апреля 2021",
    description: "Участие в выставочной зоне инициативных проектов",
    image: "/img/photo_6.png",
  },
  {
    id: 7,
    title: "XXV Петербургский международный экономический форум",
    date: "15-18 июня 2022",
    description:
      "Участие в выставочной зоне Российского экспортного центра - «Сделано в России»",
    image: "/img/photo_7.png",
  },
  {
    id: 8,
    title: "Сабантуй",
    date: "2 июля 2022",
    description: "Участие в выставочной зоне университета",
    image: "/img/photo_8.png",
  },
  {
    id: 9,
    title: "Geek Picnic – международный фестиваль науки и технологий",
    date: "30 июля 2022",
    description: "Участие в экспозиции фестиваля",
    image: "/img/photo_9.png",
  },
  {
    id: 10,
    title: "Авиасалон «Детский авиационно-космический салон 2022»",
    date: "20-21 августа 2022",
    description: "Участие в выставочной зоне университета",
    image: "/img/photo_10.png",
  },
  {
    id: 11,
    title: "Навигатор Поступления 2022 МСК",
    date: "10-11 сентября 2022",
    description: "Участие в выставочной зоне университета",
    image: "/img/photo_11.png",
  },
  {
    id: 12,
    title: "VI Международная конференция по аддитивным технологиям",
    date: "15 сентября 2022",
    description: "Участие в выставочной зоне стартап проектов",
    image: "/img/photo_12.png",
  },
  {
    id: 13,
    title: "Навигатор Поступления 2022 СПБ",
    date: "24-25 сентября 2022",
    description: "Участие в выставочной зоне университета",
    image: "/img/photo_13.png",
  },
  {
    id: 14,
    title: "День открытых дверей",
    date: "1 октября 2022",
    description: "Участие в выставочной зоне инициативных проектов",
    image: "/img/photo_14.png",
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "up") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + events.length) % events.length
      );
    } else if (direction === "down") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }
  };

  const visibleEvents = [
    events[currentIndex],
    events[(currentIndex + 1) % events.length],
    events[(currentIndex + 2) % events.length],
  ];

  return (
    <section className={styles.sectionEvents} id="events">
      <h2>МЕРОПРИЯТИЯ</h2>
      <div className={styles.border}></div>
      <div className={styles.events}>
        <div className={styles.eventsScroller}>
          <ul className={styles.eventsList}>
            {visibleEvents.map((event) => (
              <li key={event.id}>
                <p>{event.date}</p>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
          <div>
            <button onClick={() => handleScroll("up")}>
              <Image
                src="/img/arrow-up.png"
                alt="arrow-up"
                width={60}
                height={40}
                className={styles.arrow}
              />
            </button>
            <button onClick={() => handleScroll("down")}>
              <Image
                src="/img/arrow-down.png"
                alt="arrow-down"
                width={60}
                height={40}
                className={styles.arrow}
              />
            </button>
          </div>
        </div>
        <div className={styles.eventImage}>
          <Image
            src={events[currentIndex].image}
            alt={events[currentIndex].title}
            width={620}
            height={470}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
