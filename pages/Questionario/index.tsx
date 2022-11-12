
import { PopupButton, Widget } from '@typeform/embed-react'
import styles from './style.module.scss'
export default function Questionario() {

    return (
        <section className="mb-5"  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
            <div>
                <header className="py-5">
                    <div className="container px-5">
                        <div className="row justify-content-center">
                            <div className="text-center">
                                <h1 className="fw-bolder mb-3">Testes</h1>
                                <p className="lead fw-normal text-muted">Selecione o teste que você deseja fazer.</p>
                                <a type="button" className="btn btn-primary btn-lg  border border-dark" href="Questionario/modelo-servico">Modelos como serviço</a>
                                <p></p>
                                <a type="button" className="btn btn-primary btn-lg border border-dark" href="Questionario/conceitos-nuvem">Conceitos de Nuvem</a>
                                <p></p>
                                <a type="button" className="btn btn-primary btn-lg border border-dark" href="Questionario/quest-amazon">Questionário Amazon</a>
                                <p></p>
                                <a type="button" className="btn btn-primary btn-lg border border-dark" href="Questionario/quest-azure">Questionário Azure</a>
                                <p></p>
                                <a type="button" className="btn btn-primary btn-lg border border-dark" href="Questionario/quest-google">Questionário Google</a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </section>

    )
}