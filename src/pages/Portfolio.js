import styles from './Main.module.scss'

import PortfolioHero from "../sections/PortfolioHero";
import MyProjects from "../sections/MyProjects";
import Technologies from "../sections/Technologies";
import Contact from "../sections/Contact";

export default function Portfolio() {
    return (
        <div>
            <PortfolioHero/>
            <MyProjects/>
            <Technologies/>
            <div className={styles.portfolio}>
                <Contact/>
            </div>
        </div>
    )
}
