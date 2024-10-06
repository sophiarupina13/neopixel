import styles from "../../../app/page.ruby.module.css";
import Image from "next/image";

const Quality = () => {
  return (
    <section className={styles.sectionQuality} id="quality">
        <h2>ПРЕМИАЛЬНОЕ КАЧЕСТВО<br></br>ПЕЧАТИ</h2>
        <p>4K Mono LCD обеспечивает беспрецедентный уровень качества получаемого изделия</p>
        <button>Заказать</button>
    </section>
  );
};

export default Quality;
