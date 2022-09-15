
import { PopupButton } from '@typeform/embed-react'
import styles from './style.module.scss'
export default function Questionario() {

    return (
        <div>

            <div className="col-lg-6 p-5">
                <h2 className="fw-bolder">Teste seus conhecimentos!!</h2>
                <p className="lead fw-normal text-muted mb-0">Desenvolvemos um questionario para que você possa testar seus conhecimentos.</p>
                <PopupButton id="Or65TFXB"  className={styles.popbuttonQuest}   size={80}>
                    Teste seus conhecimentos
                </PopupButton>
            </div>

            {/* <section className="py-5 bg-light h-[100vh] ">
            <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-first order-lg-last">
                    <button type="button" className="btn btn-primary btn-lg " data-toggle="modal" data-target="#MyModal">Clique Aqui!!</button></div>
                    <div className="col-lg-6">
                        <h2 className="fw-bolder">Teste seus conhecimentos!!</h2>
                        <p className="lead fw-normal text-muted mb-0">Desenvolvemos este questionário para que você possa testar seus conhecimento! O questionário é composto por 30 perguntas de múltipla escolha, na qual você pode levar o tempo que precisar para responde-las.</p>
                    </div>
                </div>
            </div>
        </section>
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
               
               
                <div id="MyModal" className="modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h4 className="modal-title">Bem-vindo ao questionário!</h4>
                        </div>
                        <div className="modal-body">
                            <Tabss/>
                        </div>
                       
                    </div>
                    </div>
                </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
        </div> */}
        </div>
    )
}