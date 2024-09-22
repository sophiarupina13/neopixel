import styles from "../app/page.module.css";

const Gallery = () => {
  return (
    <section className={styles.sectionGallery}>
      <div>
        <h2>ГАЛЕРЕЯ</h2>
        <div className={styles.galleryBorder}></div>
        <ul className={styles.eventsList}>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
