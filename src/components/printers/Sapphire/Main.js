import styles from "../../../app/page.sapphire.module.css";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <section className={styles.sectionMain} id="main">
      <div className={styles.mainContent}>
        <div className={styles.mainText}>
          <div>
            <h1>
              NEOPIXEL <span className={styles.blue}>SAPPHIRE</span>
            </h1>
            <p>
            Фотополимерный 3D принтер повышенной<br></br>точности NeоPixel
            </p>
          </div>
          <div className={styles.mainButton}>
            <button>Заказать</button>
          </div>
        </div>
        <div className={styles.mainBorder}></div>
        <ul>
          <li>
          <Link href="/printers/ruby" legacyBehavior>
            <a>
            <Image 
              src="/img/ruby.png"
              alt="sapphire"
              width={100}
              height={150}
              className={styles.mainPrinter}/>
            <p>RUBY</p>
            </a>
            </Link>
          </li>
          <li>
          <Link href="/printers/heliodorus" legacyBehavior>
          <a>
            <Image 
              src="/img/heliodorus.png"
              alt="heliodorus"
              width={90}
              height={150}
              className={styles.mainPrinter}/>
            <p>HELIODORUS</p>
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Main;
