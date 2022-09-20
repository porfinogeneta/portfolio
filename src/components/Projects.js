import styles from './Projects.module.scss'
import {useIntersection} from "../hooks/useIntersection";

export default function Projects() {

    const { isVisible: firstIsVisible, containerRef: firstContainerRef } = useIntersection(
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        }
    )
    const { isVisible: secondIsVisible, containerRef: secondContainerRef } = useIntersection(
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        }
    )

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles['first-project']} `}  ref={firstContainerRef}>
                <img  className={firstIsVisible ? 'show-up' : 'hidden-up'} src={require('../assets/photos/rockpaperscissors.png')} alt={"photo"}/>
            </div>
            <div className={`${styles['second-project']}`} ref={secondContainerRef}>
                <img className={secondIsVisible ? 'show' : 'hidden'} src={require('../assets/photos/yt2.png')} alt={"photo"}/>
                <img className={secondIsVisible ? 'show' : 'hidden-up'} src={require('../assets/photos/yt1.png')} alt={"photo"}/>
            </div>
        </div>
    )
}
