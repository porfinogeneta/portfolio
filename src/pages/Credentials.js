import styles from './Credentials.module.scss'

export default function Credentials() {
    return (
        <div className={styles.container}>
            <a target={"_blank"} href={"https://logo.com/"}>Logo</a>
            <a target={"_blank"} href={"https://fonts.google.com/icons"}>Icons</a>
            <h2>I was inspired by <a target={"_blank"} href={"https://www.youtube.com/watch?v=B-ytMSuwbf8&t=6434s"}>this channel</a></h2>
            <div><a target="_blank" href="https://icons8.com/icon/13963/twitter">Twitter</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
            <div><a target="_blank" href="https://icons8.com/icon/118497/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
            <div><a target="_blank" href="https://icons8.com/icon/32323/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
        </div>
    )
}
