import Card from "./Card";
import {useIntersection} from "../hooks/useIntersection";
import cookies from 'js-cookie'


export default function CardRow({cards, isVisible, centered=false, size='normal'}) {

    const currentLanguageCode = cookies.get('i18next') || 'en' // get currently selected language


    return (
        <>
            {cards.map((card) => (
                <div key={card.id} className={`${isVisible ? 'show' : 'hidden'}`}>
                    {currentLanguageCode === 'en' && (
                        <Card icon={card.icon} header={card.header} paragraph={card.paragraph} size={size} centered={centered}/>
                    )}
                    { currentLanguageCode !== 'en' && (
                        <Card icon={card.icon} header={card.headerPL} paragraph={card.paragraphPL} size={size} centered={centered}/>
                    )}
                </div>

            ))}
        </>
    )
}
