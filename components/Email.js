import styles from './../styles/Email.module.scss';

const Email = () => {
  return (
    <div className={styles.container} id="contacts">
      <div className={styles.desc}>
        <p>
          Having a question or would like to say "
          <b>
            <i>Hi</i>
          </b>
          " to us?
        </p>
        <h3>Send us a message, we would love to hear from you.</h3>
      </div>
      <form className={styles.form}>
        <div className={styles.formField}>
          <label htmlFor="name">Your name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email">Your email address</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className={styles.formField}>
          <label htmlFor="message">Your message</label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" value="send" className={styles.btnSubmit} />
      </form>
    </div>
  );
};

export default Email;
