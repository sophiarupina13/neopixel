import styles from "../../../app/page.sapphire.module.css";

const printerSpecs = [
  { title: "Экран экспозиции: ", description: "5,5 дюйма, монохромный" },
  { title: "Размеры печати: ", description: "8 x 13,2 x 8 см (ВШГ)" },
  { title: "Коэф-т пропускания света: ", description: "10%" },
  { title: "Коэф-т контрастности: ", description: "400:1" },
  { title: "Источник света: ", description: "унифицированная матрица (24 светодиода)" },
  { title: "Плотность светового потока: ", description: "75000 люксов" },
  { title: "Мощность матрицы: ", description: "135 вт" },
  { title: "Разрешение дисплея: ", description: "3840 x 2400 пикселей (4К)" },
  { title: "Размер пикселя: ", description: "25 мкм" },
  { title: "Минимальная высота слоя: ", description: "10 мкм" },
  { title: "Скорость печати: ", description: "10 см/час" },
  { title: "Панель управления: ", description: "сенсорный TFT-дисплей с диагональю 3,5 дюйма" },
  { title: "Интерфейс обмена данными: ", description: "USB-C, Wi-Fi" },
  { title: "Источник питания: ", description: "300 Вт" },
  { title: "Программное обеспечение: ", description: "Vlare Slicer" },
  { title: "Габариты устройства: ", description: "38 x 22 x 21 см (ВШГ)" },
  { title: "Вес устройства: ", description: "5 кг" },
];


const Characteristics = () => {
  return (
    <section className={styles.sectionCharacteristics} id="characteristics">
      <h2>ХАРАКТЕРИСТИКИ<br></br>ПРИНТЕРА</h2>
      <ul className={styles.characteristicsList}>
      {printerSpecs.map((spec, index) => (
          <li key={index}>
            <h3>{spec.title}</h3>
            <p>{spec.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Characteristics;
