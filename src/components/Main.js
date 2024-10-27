import styles from "../app/page.module.css";

const Main = () => {
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
      <button>Заказать</button>
    </section>
  );
};

export default Main;
