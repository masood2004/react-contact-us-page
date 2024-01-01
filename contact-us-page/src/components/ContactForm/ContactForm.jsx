import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa"
import { HiMail } from "react-icons/hi";
import { useState } from "react";


const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    event.preventDefault();
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>

        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>

        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail />} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Name</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <div className={styles.values}>
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Email: </strong> {email}</p>
            <p><strong>Text: </strong> {text}</p>
          </div>
            <Button text="SUBMIT BUTTON" />
          </div>


        </form>

      </div>

      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="contact_img" />
      </div>
    </section>
  )
}

export default ContactForm;