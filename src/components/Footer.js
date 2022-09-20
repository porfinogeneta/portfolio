import styles from './Footer.module.scss'
import IconsTrio from "./IconsTrio";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <nav className={styles.container}>
            <div className={styles.text}>
                <p>©Copyright Szymon Mazurek 2022. All rights reserved</p>
                <Link className={'link'} to={'/credentials'}>
                    <p>Inspiration</p>
                </Link>
            </div>
            <div className={styles.lang}>
                {/*<span>PL</span>*/}
                {/*<span>/</span>*/}
                {/*<span>EN</span>*/}
            </div>
            <div className={styles.icons}>
                <IconsTrio/>
            </div>
        </nav>
    )
}
