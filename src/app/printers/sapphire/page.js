import Header from "@/components/printers/Sapphire/Header";
import styles from "../../../app/page.sapphire.module.css";
import Main from "@/components/printers/Sapphire/Main";
import Description from "@/components/printers/Sapphire/Description";
import Footer from "@/components/printers/Sapphire/Footer";
import Characteristics from "@/components/printers/Sapphire/Characteristics";
import Usage from "@/components/printers/Sapphire/Usage";
import Quality from "@/components/printers/Sapphire/Quality";
import Speed from "@/components/printers/Sapphire/Speed";
import Interface from "@/components/printers/Sapphire/Interface";
import Vlare from "@/components/printers/Sapphire/Vlare";
import Examples from "@/components/printers/Sapphire/Examples";
import Convenience from "@/components/printers/Sapphire/Convenience";
import ConsultationForm from "@/components/printers/Sapphire/ConsultationForm";

export default function SapphirePrinter() {
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
