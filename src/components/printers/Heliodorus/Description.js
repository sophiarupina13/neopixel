import styles from "../../../app/page.heliodorus.module.css";

const Description = () => {
  return (
    <section className={styles.sectionDescription} id="description">
      <h2>ОПИСАНИЕ МОДЕЛИ</h2>
      <ul className={styles.descriptionList}>
        <li>
          <p>Эргономичный внешний вид, превосходное качество и высокая скорость печати, все это делает продукт по истине уникальным и многофункциональным.</p>
        </li>
        <li>
          <p>Понятный интерфейс управления оснащенный полноцветный сенсорным экраном 3,5 дюйма обеспечивает удобство использования устройства.</p>
        </li>
        <li>
          <p>Устройство адаптировано к работе к такими операционными системами как Windows и MacOS. Флэш накопитель типа type-c сочетает в себе удобство и комфорт, вы можете использовать порт типа USB-B или же USB-С, при этом вам больше не придется искать переходник в случае отсутствия нужного порта на устройстве</p>
        </li>
      </ul>
    </section>
  );
};

export default Description;
