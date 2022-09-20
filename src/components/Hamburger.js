import styles from './Hamburger.module.scss'
import {useState} from "react";
import {Link} from "react-router-dom";
import IconsTrio from "./IconsTrio";

export default function Hamburger() {
    const [status, setStatus] = useState('close')

    const handleClick = () =>{
        // change open ability
        return status === 'open' ? setStatus('close') : setStatus('open')
    }

    return(
        <>
            <div className={`${styles['menu-btn-container']}`} onClick={handleClick}>
               <i className={styles[status]}></i>
               <i className={styles[status]}></i>
               <i className={styles[status]}></i>
            </div>
            {status === 'open' && (
                <div className={styles.modal}>
                    <h2><Link className={'link'} to={'/'} onClick={() => setStatus('close')}>Home</Link></h2>
                    <h2><Link className={'link'} to={'/dev-portfolio'} onClick={() => setStatus('close')}>Portfolio</Link></h2>
                    <span onClick={() => setStatus('close')}>
                        <IconsTrio/>
                    </span>
                </div>
            )}
        </>


    )
}
