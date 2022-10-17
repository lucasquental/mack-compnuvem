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
                                    Nesta página vamos falar um pouco sobre o Recurso Educacional Digital que foi implementado.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
         
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="objetivo.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Objetivo</h2>
                            <p className="lead fw-normal text-muted mb-0">Este Recurso Educacional Digital (R.E.D.) tem como objetivo ensinar sobre os conceitos da computação em nuvem, direcionados para modelos teóricos e práticos. Abordando assim temas como IaaS, PaaS, SaaS, NIST e suas utilizações em aplicações reais (AWS, Microsoft Azure e Google Cloud Platform [GCP]).</p>
                        </div>
                    </div>
                </div>
            </section>
         
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="recursos.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Recursos</h2>
                            <p className="lead fw-normal text-muted mb-0">No R.E.D. temos vários tipos de materiais para auxiliar o usuário a entender melhor o conteúdo como, textos explicativos sobre os diferentes tópicos abordados, vídeos sobre alguns casos de uso da computação em nuvem e testes para avaliar o seu conhecimento sobre o que foi apresentado no recurso.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6  order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="pessoas.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Público Destinado</h2>
                            <p className="lead fw-normal text-muted mb-0">O público-alvo é composto por pessoas que possuam interesse em adquirir conhecimentos gerais e/ou específicos sobre a computação em nuvem; sendo assim nosso conteúdo abrange desde partes conceituais mais básicas como IaaS, PaaS, SaaS e NIST até casos de uso específicos em plataformas distintas como a AWS, Azure e GCP.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="termos.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Termos Relacionados</h2>
                            <p className="lead fw-normal text-muted mb-0">Computação em Nuvem, Nuvem, Cloud Computing, IaaS, PaaS, SaaS, AWS, GCP, Azure, NIST, Modelos de computação em Nuvem, Elasticidade, Escalabilidade, Amplo acesso a rede, Conjunto de recursos e Serviço Medido, Máquina Virtual, Prime Video, Office 365, Gmail</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6  order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="Logo1.png" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Destaque</h2>
                            <p className="lead fw-normal text-muted mb-0">Para utilizar o próprio R.E.D. como exemplo de uso da computação em nuvem, optamos por fazer a hospedagem em um serviço de PaaS, o Heroku. Desta forma é possível utilizar das vantagens que a computação em nuvem traz, como por exemplo: acessar o Recurso de qualquer ponto da internet (Celular, Tablet ou Computador) e consumi-lo a qualquer momento.</p>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
    )
}