import styles from './PortfolioHero.module.scss'
import Button from "../components/Button";

export default function PortfolioHero() {
    return (
        <section className={styles.container}>
            <div className={styles.photo}>
                <img src={require('../assets/profile.svg').default} alt={"me"}/>
            </div>
            <div className={styles.info}>
                <h3>Hey, I'm Simon</h3>
                <h1>Who am I?</h1>
                <div>
                    <p>I’m a web designer and a programmer with over three years of experience
                        in building websites using modern technologies such as React, Vue and JavaScript.</p>
                </div>
                <Button/>
            </div>
        </section>
    )
}
