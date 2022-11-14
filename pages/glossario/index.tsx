import Tabss from "../../components/tabs/tabs";
import Image from 'next/image'

export default function About(){

    return(
        <div>
            <div className="container px-4 my-4">
                <div className="text-end mb-5 mb-xl-0">
                    <a type="button" className="btn btn-primary border border-dark" href="Questionario/conceitos-nuvem">
                        Próximo passo: Testes - Conceitos de Nuvem
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>

            <header>
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="text-center">
                            <h1 className="fw-bolder mb-3">Glossário</h1>
                            <p className="lead fw-normal text-muted">Definições de termos utilizados durante o Recurso Educacional Digital.</p>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-1 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <p className="lead fw-normal"><strong><em>IaaS</em> - </strong><em>"Infrastructure as a Service</em> / Infraestrutura como Serviço"<small></small></p>
                    <p className="lead fw-normal"><strong><em>PaaS</em> - </strong><em>"Platform as a Service</em> / Plataforma como Serviço"<small></small></p>
                    <p className="lead fw-normal"><strong><em>SaaS</em> - </strong><em>"Software as a Service</em> / <em>Software</em> como Serviço"<small></small></p>
                    <p className="lead fw-normal"><strong>Provedores de Nuvem - </strong><em>"Provedores de serviços em nuvem são empresas que estabelecem nuvens públicas, gerenciam nuvens privadas ou oferecem componentes de cloud computing sob demanda (também conhecidos como serviços de cloud computing), como infraestrutura como serviço (IaaS), plataforma como serviço (PaaS) e software como serviço (SaaS)."</em><small><em>{/* Referência em: https://www.redhat.com/pt-br/topics/cloud-computing/what-are-cloud-providers*/}</em></small></p>
                    <p className="lead fw-normal"><strong><em>Bucket</em> - </strong><em>"Um bucket é um contêiner de objetos. Um objeto é um arquivo e qualquer metadado que descreva esse arquivo."</em><small><em>{/* Referência em: https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/GetStartedWithS3.html*/}</em></small></p>
                    <p className="lead fw-normal"><strong><em>Container</em> - </strong><em>"O armazenamento de arquivos é mais como uma pasta pessoal (bucket ou container) com arquivos e subpastas estruturados para envio pelo usuário, funcionando como uma pasta remota conectada ao computador do usuário ou uma instância virtual do servidor."</em><small><em>{/* Referência em: https://hftecnologia.com.br/armazenamento-em-nuvem-como-funciona/*/}</em></small></p>   
                </div>
            </section>
            
            <div className="container px-5 my-5">
                <div className="text-end mb-5 mb-xl-0">
                    <a type="button" className="btn btn-primary border border-dark" href="Questionario/conceitos-nuvem">
                        Próximo passo: Testes - Conceitos de Nuvem
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>     
        </div>
    )
}