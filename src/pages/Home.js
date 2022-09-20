import styles from './Main.module.scss'

import HomeHero from "../sections/HomeHero";
import Benefits from "../sections/Benefits";
import WhatCanIBuild from "../sections/WhatCanIBuild";
import Contact from "../sections/Contact";

export default function Home() {
    return (
        <div className={styles.home}>
            <HomeHero/>
            <Benefits/>
            <WhatCanIBuild/>
            <Contact/>
        </div>
    )
}
