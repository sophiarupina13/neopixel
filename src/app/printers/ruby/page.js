import Header from "@/components/printers/Ruby/Header";
import styles from "../../../app/page.ruby.module.css";
import Main from "@/components/printers/Ruby/Main";
import Description from "@/components/printers/Ruby/Description";
import Footer from "@/components/printers/Ruby/Footer";
import Characteristics from "@/components/printers/Ruby/Characteristics";
import Usage from "@/components/printers/Ruby/Usage";
import Quality from "@/components/printers/Ruby/Quality";
import Speed from "@/components/printers/Ruby/Speed";
import Interface from "@/components/printers/Ruby/Interface";
import Vlare from "@/components/printers/Ruby/Vlare";
import Examples from "@/components/printers/Ruby/Examples";
import Convenience from "@/components/printers/Ruby/Convenience";
import ConsultationForm from "@/components/printers/Ruby/ConsultationForm";

export default function RubyPrinter() {
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
