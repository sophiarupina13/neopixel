import Header from "@/components/printers/Heliodorus/Header";
import styles from "../../../app/page.heliodorus.module.css";
import Main from "@/components/printers/Heliodorus/Main";
import Description from "@/components/printers/Heliodorus/Description";
import Footer from "@/components/printers/Heliodorus/Footer";
import Characteristics from "@/components/printers/Heliodorus/Characteristics";
import Usage from "@/components/printers/Heliodorus/Usage";
import Quality from "@/components/printers/Heliodorus/Quality";
import Speed from "@/components/printers/Heliodorus/Speed";
import Interface from "@/components/printers/Heliodorus/Interface";
import Vlare from "@/components/printers/Heliodorus/Vlare";
import Examples from "@/components/printers/Heliodorus/Examples";
import Convenience from "@/components/printers/Heliodorus/Convenience";
import ConsultationForm from "@/components/printers/Heliodorus/ConsultationForm";

export default function HeliodorusPrinter() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Main />
        <Description />
        <Characteristics />
        <Usage />
        <Quality />
        <Speed />
        <Interface />
        <Vlare />
        <Examples />
        <Convenience />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}
