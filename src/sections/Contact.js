import styles from './Contact.module.scss'
import ContactForm from "../components/ContactForm";
import {useTranslation} from "react-i18next";

export default function Contact() {

    const { t } = useTranslation()

    return (
        <section className={styles.container} id={"contact"}>
            <div className={styles.contacts}>
                <h1>{t('Project')}</h1>
                <p className={styles.intro}>{t('project-intro')}</p>
                <div className={styles.info}>
                    <p>{t('contact')}</p>
                    <p>szymonmazurek.dev@gmail.com</p>
                </div>
            </div>
            <div>
                <ContactForm/>
            </div>
        </section>
    )
}
