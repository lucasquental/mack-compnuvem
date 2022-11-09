import Tabss from "../../components/tabs/tabs";
import Image from 'next/image'

export default function About(){

    return(
        <div>
            <header className="py-5">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="text-center ">
                            <h1 className="fw-bolder mb-3">Glossário</h1>
                            <p className="lead fw-normal text-muted">Definições de termos utilizados durante o Recurso Educacional Digital.</p>
                        </div>
                    </div>
                </div>
            </header>
         
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <p className="lead fw-normal"><strong><em>IaaS</em> - </strong><em>"Infrastructure as a Service"</em><small></small></p>
                    <p className="lead fw-normal"><strong><em>PaaS</em> - </strong><em>"Platform as a Service"</em><small></small></p>
                    <p className="lead fw-normal"><strong><em>SaaS</em> - </strong><em>"Software as a Service"</em><small></small></p>
                    <p className="lead fw-normal"><strong>Provedores de Nuvem - </strong><em>"Provedores de serviços em nuvem são empresas que estabelecem nuvens públicas, gerenciam nuvens privadas ou oferecem componentes de cloud computing sob demanda (também conhecidos como serviços de cloud computing), como infraestrutura como serviço (IaaS), plataforma como serviço (PaaS) e software como serviço (SaaS)."</em><small><em> Referência em: https://www.redhat.com/pt-br/topics/cloud-computing/what-are-cloud-providers</em></small></p>
                    <p className="lead fw-normal"><strong><em>Bucket</em> - </strong><em>"Um bucket é um contêiner de objetos. Um objeto é um arquivo e qualquer metadado que descreva esse arquivo."</em><small><em> Referência em: https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/GetStartedWithS3.html</em></small></p>
                    <p className="lead fw-normal"><strong><em>Container</em> - </strong><em>"O armazenamento de arquivos é mais como uma pasta pessoal (bucket ou container) com arquivos e subpastas estruturados para envio pelo usuário, funcionando como uma pasta remota conectada ao computador do usuário ou uma instância virtual do servidor."</em><small><em> Referência em: https://hftecnologia.com.br/armazenamento-em-nuvem-como-funciona/</em></small></p>   
                </div>
            </section>
         
            {/*<section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="/servicomedido.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Medição de Serviços</h2>
                            <p className="lead fw-normal text-muted mb-0">Os sistemas em nuvem controlam e otimizam automaticamente o uso de recursos, aproveitando uma capacidade de medição em um nível de abstração apropriado ao tipo de serviço (por exemplo, armazenamento, processamento, largura de banda e contas de usuário ativas). O uso de recursos pode ser monitorado, controlado e reportado, proporcionando transparência tanto para o provedor quanto para o consumidor do serviço utilizado.</p>
                        </div>
                    </div>
                </div>
            </section>*/}
           
            
        </div>
    )
}