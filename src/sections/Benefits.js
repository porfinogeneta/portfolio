import styles from './Benefits.module.scss'
import CardRow from "../components/CardRow";


const cards = [
    {id: 1, icon: 'blog', header: 'Always dreamt of having a blog and being recognisible? - With a website you can achive it!'},
    {id: 2, icon: 'ecommerce', header: 'Wanted to create your own brand? Set up an e-commerce shop?  - With hiring me as your developer this dream has never been so close!'},
    {id: 3, icon: 'portfolio', header: 'Need a portfolio website to show your buisness and be compepetive on the job market? - I can create a website that will bring your company to the next level.'},
    {id: 4, icon: 'game', header: 'Wanted to create your own game or have a great idea for an app? - Contact Me and I will fulfill your ideas!'}
]

export default function Benefits() {

    return (
        <section className={`${styles.container}`}>
            <h1>Benefits</h1>
            <div className={styles['cards-container']}>
                <CardRow cards={cards} centered={true} size={'small'}/>
            </div>
        </section>
    )
}
