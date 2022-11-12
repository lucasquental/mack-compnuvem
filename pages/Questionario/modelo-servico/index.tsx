
import { PopupButton, Widget } from '@typeform/embed-react'
import { animateScroll as scroll } from 'react-scroll'
import { AiOutlineArrowUp,AiOutlineArrowRight } from 'react-icons/ai'
import styles from './style.module.scss'
export default function Questionario() {

    function scrollUp() {

        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.container}>


            <div className={styles.popbuttonQuest}>

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeGBo3PDYnxuV4QMJGOA1Zx2s5tJ31R7ci4NNAzNJJysDrSCQ/viewform?embedded=true" width="640" height="2982" frameBorder="0" >Carregando…</iframe>


            </div>

            <div style={{display:"flex",flexDirection:'column'}}>
                    <h1 style={{margin:'0 30px',fontSize:'13px',textAlign:'center',marginBottom:'20px'}} >Após finalizar o questionário, clique no botão "Subir a página" para verificar a pontuação.</h1>
                
                    <div className={styles.buttonContainer}>

            
                        <button className="btn btn-primary btn-lg px-4 me-sm-3 border border-dark" style={{ display: 'flex', alignItems: 'center', gap: '10px' }} onClick={scrollUp}>
                            Subir a página
                            <AiOutlineArrowUp />
                        </button>

                        <a className="btn btn-primary btn-lg px-4 me-sm-3 border border-dark" style={{ display: 'flex', alignItems: 'center', gap: '10px' }} href="conceitos-nuvem">
                            Próximo teste
                            <AiOutlineArrowRight />
                        </a>

                    </div>
            </div>
        </div>
    )
}