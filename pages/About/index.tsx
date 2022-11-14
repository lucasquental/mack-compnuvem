import Tabss from "../../components/tabs/tabs";
import Image from 'next/image'

export default function About(){

    return(
        <div>
            <div className="container px-4 my-4">
                <div className="text-end mb-5 mb-xl-0">
                    <a type="button" className="btn btn-primary border border-dark" href="/criacao">
                        Próximo passo: Criação
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <header className="py-1">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="text-center my-5">
                            <h1 className="fw-bolder mb-3">O Recurso Educacional Digital</h1>
                            <p className="lead fw-normal text-muted mb-4">Nesta página vamos falar um pouco sobre o Recurso Educacional Digital que foi implementado.</p>
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
                            <p className="lead fw-normal text-muted mb-0">Este Recurso Educacional Digital (RED) tem como objetivo ensinar alguns fundamentos teóricos e práticos da computação em nuvem. Resumidamente, os temas abordados são: <em>IaaS</em>, <em>PaaS</em>, <em>SaaS</em>, <em>NIST</em> e o seu uso em aplicações reais com as plataformas <em>AWS</em>, <em>Microsoft Azure</em> e <em>Google Cloud Platform (GCP)</em>.</p>
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
                            <h2 className="fw-bolder">Formatos</h2>
                            <p className="lead fw-normal text-muted mb-0">Neste RED, há materiais no formato texto, vídeo e testes. Os textos foram utilizados para apresentar os diferentes conceitos abordados. Os vídeos destacam alguma aplicação prática da computação em nuvem. Os testes foram feitos com a finalidade de avaliar o conhecimento específico do que foi abordado no RED.</p>
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
                            <h2 className="fw-bolder">Público-Alvo</h2>
                            <p className="lead fw-normal text-muted mb-0">O público-alvo é composto por pessoas com interesse em adquirir conhecimentos sobre a computação em nuvem, envolvendo desde conceitos mais básicos como <em>IaaS</em>, <em>PaaS</em>, <em>SaaS</em>, <em>NIST</em>, até aplicações práticas específicas em plataformas distintas como a <em>AWS</em>, <em>Azure</em> e <em>GCP</em>.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="termos.png" style={{width:'300px'}} alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Termos Relacionados</h2>
                            <p className="lead fw-normal text-muted mb-0">Computação em Nuvem, Nuvem, <em>Cloud Computing, IaaS, PaaS, SaaS, AWS, GCP, Azure, NIST</em>, Modelos de computação em Nuvem, Elasticidade, Escalabilidade, Amplo acesso a rede, Conjunto de recursos e Serviço Medido, Máquina Virtual, <em>Prime Video</em>, <em>Office 365</em>, <em>Gmail</em></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-1 bg-light" id="scroll-target">
                <div className="container px-4 my-4">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="Logo1.png" style={{width:'600px'}} alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Destaque</h2>
                            <p className="lead fw-normal text-muted mb-0">Este RED é um exemplo de uso da computação em nuvem, pois a sua hospedagem foi realizada em dois serviços de <em>PaaS</em>, o <em>Heroku</em> e o <em>Netlify</em>. Com isso, é possível, por exemplo, acessar o RED de qualquer dispositivo com acesso à internet, como Celular, Tablet ou Computador, e consumi-lo a qualquer momento.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5">
                    <div className="text-end mb-5 mb-xl-0">
                        <a type="button" className="btn btn-primary border border-dark" href="/criacao">
                            Próximo passo: Criação
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>    
        </div>
    )
}