
import { PopupButton, Widget } from '@typeform/embed-react'
import { animateScroll as scroll } from 'react-scroll'
import { AiOutlineArrowUp,AiOutlineArrowRight } from 'react-icons/ai'
import styles from './style.module.scss'
export default function Questionario() {

    function scrollUp() {

        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.popbuttonQuest}>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeGBo3PDYnxuV4QMJGOA1Zx2s5tJ31R7ci4NNAzNJJysDrSCQ/viewform?embedded=true" width="640" height="2982" frameBorder="0" >Carregando…</iframe>
        </div>
    )
}