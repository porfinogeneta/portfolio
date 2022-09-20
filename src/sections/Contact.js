import styles from './Contact.module.scss'
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <section className={styles.container} id={"contact"}>
            <div className={styles.contacts}>
                <h1>Got a project in mind?</h1>
                <p className={styles.intro}>Want to have your website live as fast as possible?
                Have any project in mind or need a business solution? </p>
                <div className={styles.info}>
                    <p>Contact me</p>
                    <p>szymonmazurek.dev@gmail.com</p>
                </div>
            </div>
            <div>
                <ContactForm/>
            </div>
        </section>
    )
}
