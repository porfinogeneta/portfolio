import Card from "./Card";
import {useIntersection} from "../hooks/useIntersection";
import cookies from 'js-cookie'


export default function CardRow({cards, centered=false, size='normal'}) {

    const currentLanguageCode = cookies.get('i18next') || 'en' // get currently selected language

    const { isVisible, containerRef} = useIntersection(
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        }
    )

    return (
        <>
            {cards.map((card) => (
                <div key={card.id} ref={containerRef} className={`${isVisible ? 'show' : 'hidden'}`}>
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
