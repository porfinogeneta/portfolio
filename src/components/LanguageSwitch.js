import styles from './LanguageSwitch.module.scss'

import cookies from 'js-cookie'
import {useTranslation} from "react-i18next";

export default function LanguageSwitch() {

    const buttons = [
        {code: 'pl', name: 'PL'},
        {code: 'en', name: 'EN'}
    ]

    const { i18n } = useTranslation()

    const currentLanguageCode = cookies.get('i18next') || 'en' // get currently selected language

    const handleClick = (lng) => {
        return i18n.changeLanguage(lng).then(() => localStorage.setItem("lng", lng))
    }

    return(
        <div className={styles.container}>
            {buttons.map((btn) =>
                <button
                    key={btn.code}
                    disabled={btn.code === currentLanguageCode}
                    onClick={() => handleClick(btn.code)}
                >
                    {btn.name}
                </button>
            )}
        </div>
    )
}
