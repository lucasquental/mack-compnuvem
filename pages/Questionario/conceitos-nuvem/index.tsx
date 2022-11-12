
import { PopupButton, Widget } from '@typeform/embed-react'
import styles from './style.module.scss'
export default function Questionario() {

    return (
        <div className={styles.popbuttonQuest}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScaGdqXl_wydJqAwvraLeA1-yg8oxDqIobXMjU2HSqjC3RW7Q/viewform?embedded=true" width="640" height="3004" frameBorder="0" >Carregando…</iframe>
        </div>
    )
}