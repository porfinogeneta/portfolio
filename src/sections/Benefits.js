import styles from './Benefits.module.scss'
import CardRow from "../components/CardRow";
import {useTranslation} from "react-i18next";


const cards = [
    {id: 1,
        icon: 'blog',
        header: 'Always dreamt of having a blog and being recognizable? - With a website you can achieve it!',
        headerPL: "Zawsze marzyłeś o posiadaniu bloga albo byciu rozpoznawalnym? - Z własną stroną internetową możesz to osiągnąć"
    },
    {id: 2,
        icon: 'ecommerce',
        header: 'Wanted to create your own brand? Set up an e-commerce shop?  - With hiring me as your developer this dream has never been so close!',
        headerPL: 'Chciałeś stworzyć własną markę? Otworzyć sklep online? - Dzięki zatrudnieniu mnie jako dewelopera realizacja Twoich planów nigdy nie była tak blisko'
    },
    {id: 3,
        icon: 'portfolio',
        header: 'Need a portfolio website to show your business and be competitive on the job market? - I can create a website that will bring your company to the next level!',
        headerPL: 'Potrzebujesz portfolio żeby zaprezentować Twoją firmę w internecie i być konkurencyjnym na rynku pracy? - Mogę stworzyć dla Ciebie witrynę, która wyniesie Twoją firmę na inny poziom!'
    },
    {id: 4,
        icon: 'game',
        header: 'Wanted to create your own game or have a great idea for an app? - Contact Me and I will fulfill your ideas!',
        headerPL: 'Zawsze chciałeś mieć własną grę albo masz pomysł na aplikację? - Skontaktuj się ze mną, a ja stworzę to o czym marzysz!'
    }
]

export default function Benefits() {

    const { t } = useTranslation()

    return (
        <section className={`${styles.container}`}>
            <h1>{t('benefits')}</h1>
            <div className={styles['cards-container']}>
                <CardRow cards={cards} centered={true} size={'small'}/>
            </div>
        </section>
    )
}
