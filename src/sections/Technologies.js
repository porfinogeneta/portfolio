import styles from './Technologies.module.scss'
import CardRow from "../components/CardRow";
import SwitchButton from "../components/SwitchButton";
import {useState} from "react";
import {CSSTransition} from 'react-transition-group';


const Designing = [
    {id: 1, icon: 'bootstrap', header: 'Bootstrap', paragraph: 'Bootstrap CSS allows me to deliver the products faster'},
    {id: 2, icon: 'figma', header: 'Figma', paragraph: 'Figma allows me to show the main design concepts to the client'},
    {id: 3, icon: 'tailwind', header: 'Tailwind', paragraph: 'Tailwind CSS allows me to build complex and beutiful layouts quicker for you'},
    {id: 4, icon: 'material', header: 'Material Design', paragraph: 'Applied Google Guidelines make your website follow modern trends'}
]

const Programming = [
    {id: 1, icon: 'react', header: 'React', paragraph: 'By the use of modern JS frameworks, such as React, I can deliver best web experience'},
    {id: 2, icon: 'vue', header: 'Vue', paragraph: 'Vue allows me to build websites and mobile apps faster and better then ever'},
    {id: 3, icon: 'webapi', header: 'Web-API', paragraph: 'I can use any API delivered by you or I can create my own'},
    {id: 4, icon: 'firebase', header: 'Firebase', paragraph: 'I use one of the most popular serverless solutions which allows me to build anything from Blog to Chat App'}
]


export default function Technologies() {

    const [cards, setCards] = useState(Designing)


    const handleSelect = (selection) => {
        if (selection === 'Designing') {
            setCards(Designing)
        }else {
            setCards(Programming)
        }
    }

    return(
        <section className={styles.container}>
            <div className={styles.info}>
                <h1>Technologies</h1>
                <p>I use modern web technologies which allows me to solve most of the problems encounterd during developing your projects.</p>
                <SwitchButton handleSelect={handleSelect}/>
            </div>
            <div className={styles.cards}>
                <CardRow cards={cards} centered={true}/>
            </div>
        </section>
    )
}
