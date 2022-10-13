import Tabss from "../../components/tabs/tabs";
import Image from 'next/image'

export default function About(){

    return(
        <div>
            <header className="py-5">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3">O Recurso Educacional Digital</h1>
                                <p className="lead fw-normal text-muted mb-4">
                                    Nesta página vamos falar um pouco sobre o Recurso Educacional Digital que foi implementado neste site.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
         
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="objetivo.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Objetivo</h2>
                            <p className="lead fw-normal text-muted mb-0">Este Recurso Educacional Digital tem como objetivo, ensinar sobre os conceitos da computação em nuvem e seus funcionamentos teóricos e práticos.</p>
                        </div>
                    </div>
                </div>
            </section>
         
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="recursos.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Recursos</h2>
                            <p className="lead fw-normal text-muted mb-0">Neste Recurso Educacional Digital nós temos vários recursos para auxiliar o usuário a entender melhor o conteúdo como textos explicativos sobre os diferentes tópicos abordados, videos sobre alguns casos de uso da computação em nuvem e testes para avaliar o seu conhecimento sobre o que foi apresentado no site.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="pessoas.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Publico Destinado</h2>
                            <p className="lead fw-normal text-muted mb-0">O nosso público alvo é composto por pessoas que possuam interesse em adquirir conhecimentos sobre a computação em nuvem, sendo assim nosso conteúdo abrange desde partes concentuais mais básicas, até casos de uso especificos em plataformas distintas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="termos.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Termos Chave</h2>
                            <p className="lead fw-normal text-muted mb-0">Computação em Nuvem, Nuvem, Cloud Computing, IaaS, PaaS, SaaS, AWS, GCP, Azure, NIST, Modelos de computação em Nuvem, Elasticidade, Escalabilidade, Amplo acesso a rede, Conjunto de recursos e Serviço Medido, Máquina Virtual, Prime Video, Office 365, Gmail</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="Logo1.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Uso da Nuvem</h2>
                            <p className="lead fw-normal text-muted mb-0">Para utilizar este Recurso Educacional Digital como exemplo de uso da numvem, optamos por fazer a hospedagem do serviço em um seriço de PaaS, o Heroku. Podendo assim acessar o Recurso de qualquer ponto da internet (Celular, Tablet ou Computador) e consumi-lo a qualquer momento.</p>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
    )
}