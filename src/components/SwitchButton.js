import styles from './SwitchButton.module.scss'
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";

export default function SwitchButton({ _handleSelect }) {

    const { t } = useTranslation()

    const [active, setActive] = useState(false) // if active=false, it means Designing is selected

    const handleSelect = useRef(_handleSelect)

    useEffect(() => {
        if (active) {
            handleSelect.current('Programming')
        }else {
            handleSelect.current('Designing')
        }
    }, [active, handleSelect])

    return (
        <div className={styles.container}>
            <button onClick={() => setActive(!active)} className={`btn-standard ${active === false ? 'active' : ''}`}>
                <p>{t('Designing')}</p>
            </button>
            <button onClick={() => setActive(!active)} className={`btn-standard ${active ? 'active' : ''}`}>
                <p>{t('Programming')}</p>
            </button>
        </div>
    )
}
