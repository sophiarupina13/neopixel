import styles from "../app/page.module.css";

const ConsultationForm = () => {
  return (
    <section className={styles.sectionConsultationForm} id="consultationForm">
      <h2>ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ОНЛАЙН</h2>
      <form className={styles.consultationForm}>
        <input
          className={styles.consultationFormInput}
          placeholder="Электронная почта"
          type="email"
          required
        />
        <input
          className={styles.consultationFormInput}
          placeholder="Имя"
          type="text"
          required
        />
        <input
          className={styles.consultationFormInput}
          placeholder="Телефон"
          type="phone"
          required
        />
        <button>Оставить заявку</button>
        <div className={styles.consultationFormCheckbox}>
          <input type="checkbox" id="consentCheckbox" required/>
          <label htmlFor="consentCheckbox">
            Я соглашаюсь на обработку персональных данных
          </label>
        </div>
      </form>
    </section>
  );
};

export default ConsultationForm;
