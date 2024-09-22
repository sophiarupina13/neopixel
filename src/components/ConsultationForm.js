import styles from "../app/page.module.css";

const ConsultationForm = () => {
  return (
    <section className={styles.sectionConsultationForm} id="consultationForm">
      <h2>ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ОНЛАЙН</h2>
      <form className={styles.consultationForm}>
        <div className={styles.consultationFormData}>
          <input placeholder="Электронная почта" type="email" />
          <input placeholder="Имя" type="text" />
          <input placeholder="Телефон" type="phone" />
          <button>Оставить заявку</button>
        </div>
        <div className={styles.consultationFormCheckbox}>
          <input type="checkbox" id="consentCheckbox" />
          <label htmlFor="consentCheckbox">
            Я соглашаюсь на обработку персональных данных
          </label>
        </div>
      </form>
    </section>
  );
};

export default ConsultationForm;
