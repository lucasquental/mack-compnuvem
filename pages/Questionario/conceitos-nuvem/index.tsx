
import { PopupButton, Widget } from '@typeform/embed-react'
import { AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai'

import styles from './style.module.scss'
export default function Questionario() {

   

    return (
        <div>

       
        <div className={styles.popbuttonQuest}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScaGdqXl_wydJqAwvraLeA1-yg8oxDqIobXMjU2HSqjC3RW7Q/viewform?embedded=true" width="640" height="3004" frameBorder="0" >Carregando…</iframe>
        </div>
        <div>
            <h1 style={{fontSize:'13px',textAlign:'center',marginBottom:'35px'}}>Clique no botão "Subir a página" para verificar o resultado do teste.</h1>
        </div>
        <div className={styles.buttonContainer}>
                <button style={{display:'flex',alignItems:'center',gap:'10px'}} className="btn btn-primary btn-lg px-4 me-sm-3 border border-dark"
                 onClick={()=>window.scroll(0,0)}>Subir a página <AiOutlineArrowUp/></button>
                <a  style={{display:'flex',alignItems:'center',gap:'10px'}} className="btn btn-primary btn-lg px-4 me-sm-3 border border-dark" href="quest-amazon">
                   Próximo teste <AiOutlineArrowRight/>
                    </a>
                    </div>
        </div>
       
        
    )
}