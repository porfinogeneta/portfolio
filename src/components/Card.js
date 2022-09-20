import styles from './Card.module.scss'

export default function Card({icon, header=null, paragraph=null, size='small', centered=false}) {

    return (
        <div className={centered ? styles['card-container-centered'] : styles['card-container']}>
            {icon === 'blog' && <img src={require("../assets/blog.svg").default} alt={"icon"}/>}
            {icon === 'ecommerce' && <img src={require("../assets/ecommerce.svg").default} alt={"icon"}/>}
            {icon === 'portfolio' && <img src={require("../assets/portfolio.svg").default} alt={"icon"}/>}
            {icon === 'game' && <img src={require("../assets/game.svg").default} alt={"icon"}/>}
            {icon === 'phone' && <img src={require("../assets/phone.svg").default} alt={"icon"}/>}
            {icon === 'rocket' && <img src={require("../assets/rocket.svg").default} alt={"icon"}/>}
            {icon === 'figma' && <img src={require("../assets/figma-icon.svg").default} alt={"icon"}/>}
            {icon === 'webapi' && <img src={require("../assets/web-api-icon.svg").default} alt={"icon"}/>}
            {icon === 'bootstrap' && <img src={require("../assets/bootstrap-5-logo-icon.svg").default} alt={"icon"}/>}
            {icon === 'firebase' && <img src={require("../assets/google-firebase-icon.svg").default} alt={"icon"}/>}
            {icon === 'react' && <img src={require("../assets/react-js-icon.svg").default} alt={"icon"}/>}
            {icon === 'vue' && <img src={require("../assets/vue-js-icon.svg").default} alt={"icon"}/>}
            {icon === 'material' && <img src={require("../assets/material-design-seeklogo.com.svg").default} alt={"icon"}/>}
            {icon === 'tailwind' && <img src={require("../assets/tailwind-css-icon.svg").default} alt={"icon"}/>}
            {size === 'small' && (
                <h6>{header}</h6>
            )}
            {size === 'normal' && (
                <h5>{header}</h5>
            )}
            <p>{paragraph}</p>
        </div>
    )
}
