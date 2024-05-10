import Image from "next/image";
import styles from './contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
          src='/contact.png' 
          alt='contact' fill
          className={styles.logo} 
        />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Contact Us</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surename *"/>
          <input type="text" placeholder="Email Address *"/>
          <input type="text" placeholder="Phone Number (optional)"/>
          <textarea 
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder='Message'
          >
          </textarea>
          <button className={styles.send}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage