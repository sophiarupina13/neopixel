"use client";
import styles from "../app/page.module.css";
import { useState } from "react";
import Image from "next/image";

const pictures = [
  {
    id: 1,
    image: "/img/gallery1.png",
  },
  {
    id: 2,
    image: "/img/gallery2.png",
  },
  {
    id: 3,
    image: "/img/gallery3.png",
  },
  {
    id: 4,
    image: "/img/gallery4.png",
  },
  {
    id: 5,
    image: "/img/gallery5.png",
  },
  {
    id: 6,
    image: "/img/gallery6.png",
  },
  {
    id: 7,
    image: "/img/gallery7.png",
  },
  {
    id: 8,
    image: "/img/gallery8.png",
  },
  {
    id: 9,
    image: "/img/gallery9.png",
  },
];

const Gallery = () => {
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
    <section className={styles.sectionGallery}>
      <div>
        <h2>ГАЛЕРЕЯ</h2>
        <div className={styles.border}></div>
      </div>
      <ul className={styles.picturesList}>
        {visiblePictures.map((picture) => (
          <li key={picture.id}>
            <Image
              src={picture.image}
              alt="photo gallery"
              width={490}
              height={380}
              className={styles.galleryImage}
            />
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

export default Gallery;
