import styles from './MyProjects.module.scss'
import Projects from "../components/Projects";
import {useTranslation} from "react-i18next";

export default function MyProjects() {

    const {t} = useTranslation()

    return (
        <section className={`${styles.container}`} >
            <div className={styles.info}>
                <h1>{t('my-projects')}</h1>
                <p>{t('my-projects-paragraph')}</p>
            </div>
            <Projects/>
        </section>
    )
}
