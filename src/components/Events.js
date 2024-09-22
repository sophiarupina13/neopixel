import styles from "../app/page.module.css";

const Events = () => {
  return (
    <section className={styles.sectionEvents}>
      <div>
        <h2>МЕРОПРИЯТИЯ</h2>
        <ul className={styles.eventsList}>
          <li>
            <p>1 июня 2021</p>
            <h3>Фестиваль детства и юности «Большая перемена»</h3>
            <p>Участие в выставочной зоне инициативных проектов</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Events;
