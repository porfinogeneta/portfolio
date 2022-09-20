import styles from './SwitchButton.module.scss'
import {useEffect, useState} from "react";

export default function SwitchButton({ handleSelect }) {

    const [active, setActive] = useState(false) // if active=false, it means Designing is selected

    useEffect(() => {
        if (active) {
            handleSelect('Programming')
        }else {
            handleSelect('Designing')
        }
    }, [active])

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
