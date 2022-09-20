import styles from './MyProjects.module.scss'
import Projects from "../components/Projects";

export default function MyProjects() {



    return (
        <section className={`${styles.container}`} >
            <div className={styles.info}>
                <h1>My Projects</h1>
                <p>Recently I have made two small projects. First is a multiplayer version of a papular game - Rock Paper and Scissors. The second one is my simplified verion of YouTube.</p>
            </div>
            <Projects/>
        </section>
    )
}
