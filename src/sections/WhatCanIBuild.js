import styles from './WhatCanIBuild.module.scss'
import CardRow from "../components/CardRow";
import {useTranslation} from "react-i18next";


const cards = [
    {id: 1,
        icon: 'rocket',
        header: 'I can design a fully responsive and accessible website',
        headerPL: 'Mogę stworzyć w pełni dostępną i responsywną stronę',
        paragraph: 'Nowadays, more and more websites are trying to be more accessible and responsive. By doing so they can gather a bigger audience. I can develop for you or your company a website that will truly make you competitive!',
        paragraphPL: 'Obecnie coraz więcej stron internetowych stara się być ogólnodostępnymi na wszystkich urządzeniach. Mogę dla Ciebie stworzyć stronę, która rzeczywiście sprawi, że będziesz konkurencyjny!'
    },
    {id: 2,
        icon: 'ecommerce',
        header: 'I can design and create fully operational eCommerce',
        headerPL: 'Mogę stworzyć w pełni gotowy do działania sklep internetowy',
        paragraph: 'There is no doubt that modern market is the internet one. By accessing it your brand will begin to grow with an unprecedented pace!',
        paragraphPL: 'Nie ma wątpliwości, że nowoczesny rynek to to ten w internecie. Przez dostęp do niego Twoja marka wkroczy na ścieżkę bezprecedensowego wzrostu!'
    },
    {id: 3,
        icon: 'phone',
        header: 'I can develop a fully operational IOS and Android PWA',
        headerPL: 'Mogę stworzyć w pełni działającą aplikację',
        paragraph: 'Thanks to the best JavaScript Frameworks making an IOS and Android App has never been so fast. I can move your brand or website to the multi-market level!',
        paragraphPL: 'Dzięki najlepszym Frameworkom do języka JavaScript tworzenie aplikacji na Androida i IOS nigdy nie było tak szybkie. Pomogę wynieść Twoją markę albo stronę na poziom dostępności na wielu rynkach!'
    }
]

export default function WhatCanIBuild() {

    const {t} = useTranslation()

    return (
        <section className={styles.container}>
            <h1>{t('what-build')}</h1>
            <div className={styles.cards}>
                <CardRow cards={cards}/>
            </div>
        </section>
    )
}
