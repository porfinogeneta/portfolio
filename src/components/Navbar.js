import styles from './Navbar.module.scss'

import Logo from "../assets/Logo";
import IconsTrio from "./IconsTrio";
import {Link} from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Navbar() {


    return (
        <nav>
            <div className={styles['logo-container']}>
                <div className={styles.logo}>
                    <Logo/>
                </div>
            </div>
            <div className={styles.navigation}>
                <div className={styles.elem}>
                    <Link className={'link'} to={'/'}>
                        <h5 >About Me</h5>
                    </Link>
                </div>
                <div>
                    <Link className={'link'} to={'/portfolio'}>
                        <h5 >Portfolio</h5>
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
