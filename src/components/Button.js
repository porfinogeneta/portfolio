import styles from './Button.module.scss'

export default function Button({text, icon="arrow"}) {

    const handleScroll = () => {
        const section = document.querySelector('#contact')
        section.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }

    return(
        <button className={styles['main-button']} onClick={handleScroll}>
            <p>{text}</p>
            <div style={{width: 20, height: 20}}>
                {icon === 'arrow' && <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 40 40" fill="#F9F9F9"><path d="M24 40 8 24l2.1-2.1 12.4 12.4V8h3v26.3l12.4-12.4L40 24Z"/></svg>}
                {icon === 'send' && <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 40 40" fill="#F9F9F9"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"/></svg>}
            </div>
        </button>
    )
}
