import styles from './PortfolioHero.module.scss'
import Button from "../components/Button";
import {useTranslation} from "react-i18next";
import cookies from "js-cookie";


export default function PortfolioHero() {

    const {t} = useTranslation()

    const currentLanguageCode = cookies.get('i18next') || 'en' // get currently selected language

    return (
        <section className={styles.container}>
            <div className={styles.photo}>
                <img src={require('../assets/profile.svg').default} alt={"me"}/>
            </div>
            <div className={styles.info}>
                <h3>{t("hey")}</h3>
                <h1>{t("who")}</h1>
                <div>
                    <p>{t('who-p')}</p>
                </div>
                <Button text={currentLanguageCode === 'en' ? "Contact me" : 'Skontaktuj się'}/>
            </div>
        </section>
    )
}
