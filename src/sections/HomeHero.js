import styles from './HomeHero.module.scss'
import Button from "../components/Button";

export default function HomeHero() {

    return(
        <div className={`${styles.container}`} >
            <h3>Hey, I'm Szymon Mazurek</h3>
            <h1>Freelance Web Designer & JS Programmer</h1>
            <p>
               Hey, I’m a web developer and Computer Science student. If you’ve always wanted to have your own, personal or company website? Maybe you just have a project in mind? Don’t hestitate and contact me! Together we can develop your idea and make it accessible in the entire World.
            </p>
            <span>
                <Button/>
            </span>
        </div>
    )
}
