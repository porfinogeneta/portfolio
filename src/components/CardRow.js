import Card from "./Card";
import {useIntersection} from "../hooks/useIntersection";


export default function CardRow({cards, centered=false, size='normal'}) {

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
                    <Card icon={card.icon} header={card.header} paragraph={card.paragraph} size={size} centered={centered}/>
                </div>

            ))}
        </>
    )
}
