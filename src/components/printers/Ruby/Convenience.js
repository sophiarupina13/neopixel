import styles from "../../../app/page.ruby.module.css";
import Image from "next/image";

const Convenience = () => {
  return (
    <section className={styles.sectionConvenience} id="convenience">
        <h2>УДОБСТВО В КАЖДОМ<br></br>ДЕЙСТВИИ</h2>
        <p>Комплектация включает набор для первого запуска печати: смола, перчатки и жидкость для очистки модели от излишков материала.</p>
        <p>Устройство готово к работе сразу же после распаковки и не требует дополнительных настроек для первого пользования</p>
    </section>
  );
};

export default Convenience;