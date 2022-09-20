import styles from './SwitchButton.module.scss'
import {useEffect, useRef, useState} from "react";

export default function SwitchButton({ _handleSelect }) {

    const [active, setActive] = useState(false) // if active=false, it means Designing is selected

    const handleSelect = useRef(_handleSelect)

    useEffect(() => {
        if (active) {
            handleSelect.current('Programming')
        }else {
            handleSelect.current('Designing')
        }
    }, [active, handleSelect])

    return (
        <div className={styles.container}>
            <button onClick={() => setActive(!active)} className={`btn-standard ${active === false ? 'active' : ''}`}>
                <p>Designing</p>
            </button>
            <button onClick={() => setActive(!active)} className={`btn-standard ${active ? 'active' : ''}`}>
                <p>Programming</p>
            </button>
        </div>
    )
}
