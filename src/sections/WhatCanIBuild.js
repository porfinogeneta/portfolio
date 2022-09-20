import styles from './WhatCanIBuild.module.scss'
import Card from "../components/Card";
import CardRow from "../components/CardRow";


const cards = [
    {id: 1, icon: 'rocket', header: 'I can design a fully responsive and accesible website', paragraph: 'Nowadays more and more websites are trying to be more accesible and responsive. By doing so they can gather a bigger audience. I can make you or your company a website that will truly make you competetive.'},
    {id: 2, icon: 'ecommerce', header: 'I can design and create fully operational eCommerce', paragraph: 'There is no doubt that modern market is the internet one. By accesing it your brand will start to grow with an unprecedented pace.'},
    {id: 3, icon: 'phone', header: 'I can develop a fully operational IOS and Android PWA', paragraph: 'Thanks to the most modern JavaScript frameworks making an IOS and Android App has never been so fast. I can move your brand or website to the multimarket level.'}
]

export default function WhatCanIBuild() {
    return (
        <section className={styles.container}>
            <h1>What Can I build?</h1>
            <div className={styles.cards}>
                <CardRow cards={cards}/>
            </div>
        </section>
    )
}
