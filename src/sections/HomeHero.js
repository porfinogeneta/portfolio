import styles from './HomeHero.module.scss'
import Button from "../components/Button";
import {useTranslation} from "react-i18next";
import cookies from "js-cookie";

export default function HomeHero() {

    const currentLanguageCode = cookies.get('i18next') || 'en' // get currently selected language

    const  { t } = useTranslation()

    return(
        <div className={`${styles.container}`} >
            <h3>{t("my-intro")}</h3>
            <h1>{t('main-header')}</h1>
            <p>{t('introduction')}</p>
            <span>
                <Button text={currentLanguageCode === 'en' ? "Contact me" : "Skontaktuj się"}/>
            </span>
        </div>
    )
}
