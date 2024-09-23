import ConsultationForm from "@/components/ConsultationForm";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Printers from "@/components/Printers";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Main />
        <Printers />
        <Events />
        <Gallery />
        <ConsultationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
