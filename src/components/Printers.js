import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";

const Printers = () => {
  return (
    <section className={styles.sectionPrinters} id="printers">
      <div className={styles.printersText}>
        <h2>СФЕРЫ ПРИМЕНЕНИЯ</h2>
        <div className={styles.printersDescription}>
          <p>
            Фотополимерная печать используется в тех отраслях, где подходит по
            следующим факторам: качество, точность построения, физические
            свойства и максимальные габариты создаваемого изделия
          </p>
          <ul className={styles.industriesList}>
            <li>
              <p>ювелирное дело</p>
            </li>
            <li>
              <p>стоматология</p>
            </li>
            <li>
              <p>машиностроение</p>
            </li>
            <li>
              <p>медицина</p>
            </li>
            <li>
              <p>автомобилестроение</p>
            </li>
            <li>
              <p>архитектура</p>
            </li>
            <li>
              <p>прототипирование</p>
            </li>
            <li>
              <p>текстильная промышленность</p>
            </li>
            <li>
              <p>обувная промышленность</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.printersPrinters}>
        <ul className={styles.printersList}>
          <li className={styles.printersListEl}>
            <Image
              className={styles.printer1}
              alt="ruby-printer"
              src={"/img/ruby.png"}
              width={10000}
              height={15000}
            />
            <h3>Ruby (R Lite / R Pro)</h3>
            <div>
              <Link href="/printers/ruby" legacyBehavior>
                <a className={styles.moreLink}>Подробнее</a>
              </Link>
              <button>Заказать</button>
            </div>
          </li>
          <li className={styles.printersListEl}>
            <Image
              className={styles.printer2}
              alt="ruby-printer"
              src={"/img/sapphire.png"}
              width={10000}
              height={15000}
            />
            <h3>Sapphire (S Lite / S Pro)</h3>
            <div>
              <Link href="/printers/sapphire" legacyBehavior>
                <a className={styles.moreLink}>Подробнее</a>
              </Link>
              <button>Заказать</button>
            </div>
          </li>
          <li className={styles.printersListEl}>
            <Image
              className={styles.printer3}
              alt="ruby-printer"
              src={"/img/heliodorus.png"}
              width={10000}
              height={15000}
            />
            <h3>Heliodorus (H Lite / H Pro)</h3>
            <div>
              <Link href="/printers/heliodorus" legacyBehavior>
                <a className={styles.moreLink}>Подробнее</a>
              </Link>
              <button>Заказать</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Printers;
