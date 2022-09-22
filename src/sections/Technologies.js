import styles from './Technologies.module.scss'
import CardRow from "../components/CardRow";
import SwitchButton from "../components/SwitchButton";
import {useState} from "react";
import {useTranslation} from "react-i18next";


const Designing = [
    {id: 1,
        icon: 'bootstrap',
        header: 'Bootstrap',
        paragraph: 'Bootstrap CSS allows me to deliver the products faster. Thanks to the usage of pre-built components I can develop faster than ever',
        paragraphPL: 'Bootstrap CSS pozwala mi dostarczać produkty szybciej. Dzięki używaniu gotowych komponentów mogę tworzyć szybciej niż kiedykolwiek'
    },
    {id: 2,
        icon: 'figma',
        header: 'Figma',
        paragraph: 'Figma allows me to show the main design concepts to You. Thanks to it You are also participating in your project',
        paragraphPL: 'Figma pozwala mi na zaprezentowanie mojego projektu designu dla Ciebie. Dzięki temu ty także możesz uczestniczyć w projekcie'
    },
    {id: 3,
        icon: 'tailwind',
        header: 'Tailwind',
        paragraph: 'Tailwind CSS allows me to build complex and beautiful layouts quicker for you',
        paragraphPL: "Tailwind CSS pozwala mi na budowanie zaawansowanych i ładnych layout'ów dla Ciebie jeszcze szybciej"
    },
    {id: 4,
        icon: 'material',
        header: 'Material Design',
        paragraph: 'Applied Google Guidelines make your website follow modern trends',
        paragraphPL: 'Posługiwanie się wytycznymi Google Guidelines sprawi, że Twoja strona będzie zbudowana według najnowszych standardów'
    }
]

const Programming = [
    {id: 1,
        icon: 'react',
        header: 'React',
        paragraph: 'By the use of modern JS frameworks, such as React, I can deliver best web experience',
        paragraphPL: 'Dzięki użyciu React możesz otrzymać ode mnie najlepsze możliwe wrażenia podczas przeglądania internetu'
    },
    {id: 2,
        icon: 'vue',
        header: 'Vue',
        paragraph: 'Vue allows me to build websites and mobile apps faster and better then ever',
        paragraphPL: 'Vue pozwala mi na budowanie stron i aplikacji mobilnych szybciej i lepiej niż kiedykolwiek'
    },
    {id: 3,
        icon: 'webapi',
        header: 'Web-API',
        paragraph: 'I can use any API delivered by you or I can create my own',
        paragraphPL: 'Mogę zwizualizować dostarczone przez Ciebie API albo stworzyć Twoje własne'
    },
    {id: 4,
        icon: 'firebase',
        header: 'Firebase',
        paragraph: 'I use one of the most popular serverless solutions which allows me to build anything from Blog to Chat App',
        paragraphPL: 'Używam jednego z bardziej popularnych rozwiązań serverless, które umożliwia mi zbudowanie wszystkiego od Bloga po Messenger'
    }
]


export default function Technologies() {

    const [cards, setCards] = useState(Designing)

    const {t} =useTranslation()

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
                <h1>{t('Technologies')}</h1>
                <p>{t('technologies-p')}</p>
                <SwitchButton _handleSelect={handleSelect}/>
            </div>
            <div className={styles.cards}>
                <CardRow cards={cards} centered={true}/>
            </div>
        </section>
    )
}
