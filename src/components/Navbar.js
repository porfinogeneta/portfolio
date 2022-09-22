import styles from './Navbar.module.scss'

import Logo from "../assets/Logo";
import IconsTrio from "./IconsTrio";
import {Link} from "react-router-dom";
import Hamburger from "./Hamburger";

// languages
import { useTranslation} from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";


export default function Navbar() {

    const { t } = useTranslation()


    return (
        <nav>
            <div className={styles['logo-container']}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
            </div>
            <div className={styles.navigation}>

                <div>
                    <Link className={'link'} to={'/'}>
                        <h5>{t('nav')}</h5>
                    </Link>
                </div>
                <LanguageSwitch/>
                <div>
                    <Link className={'link'} to={'/portfolio'}>
                        <h5>Portfolio</h5>
                    </Link>
                </div>
            </div>
            <div className={styles['icons-container']}>
                <div className={styles.icons}>
                    <IconsTrio/>
                </div>
                <div
                    className={styles['mobile-icon']}>
                    <Hamburger/>
                </div>
            </div>
        </nav>
    )
}
