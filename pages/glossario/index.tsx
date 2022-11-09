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
                                <h1 className="fw-bolder mb-3">Glossário</h1>
                                <p className="lead fw-normal text-muted mb-4">Aqui temos algumas definições de termos utilizados durante o Recurso Educacional Digital.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
         
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <p className="lead fw-normal"><strong><em>IaaS</em> - </strong><em>"Infrastructure as a Service"</em><small></small></p>
                    <p className="lead fw-normal"><strong><em>PaaS</em> - </strong><em>"Platform as a Service"</em><small></small></p>
                    <p className="lead fw-normal"><strong><em>SaaS</em> - </strong><em>"Software as a Service"</em><small></small></p>
                    <p className="lead fw-normal"><strong>Provedores de Nuvem - </strong><em>"Provedores de serviços em nuvem são empresas que estabelecem nuvens públicas, gerenciam nuvens privadas ou oferecem componentes de cloud computing sob demanda (também conhecidos como serviços de cloud computing), como infraestrutura como serviço (IaaS), plataforma como serviço (PaaS) e software como serviço (SaaS)."</em><small> Referência em: https://www.redhat.com/pt-br/topics/cloud-computing/what-are-cloud-providers</small></p>
                    <p className="lead fw-normal"><strong><em>Bucket</em> - </strong><em>"Um bucket é um contêiner de objetos. Um objeto é um arquivo e qualquer metadado que descreva esse arquivo."</em><small> Referência em: https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/GetStartedWithS3.html</small></p>
                    <p className="lead fw-normal"><strong><em>Container</em> - </strong><em>"O armazenamento de arquivos é mais como uma pasta pessoal (bucket ou container) com arquivos e subpastas estruturados para envio pelo usuário, funcionando como uma pasta remota conectada ao computador do usuário ou uma instância virtual do servidor."</em><small> Referência em: https://hftecnologia.com.br/armazenamento-em-nuvem-como-funciona/</small></p>   
                </div>
            </section>
         
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="/escalabilidade.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Escalabilidade</h2>
                            <p className="lead fw-normal text-muted mb-0">Um consumidor pode provisionar unilateralmente recursos de computação, como tempo de servidor e armazenamento de rede, conforme necessário automaticamente, sem exigir interação humana com cada provedor de serviços.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="/rede.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Amplo Acesso a Rede</h2>
                            <p className="lead fw-normal text-muted mb-0">Os recursos estão disponíveis na rede e são acessados ​​por meio de mecanismos padrão que promovem o uso por plataformas heterogêneas de clientes finos ou grossos (por exemplo, telefones celulares, tablets, laptops e estações de trabalho).</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="/caixa.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Conjunto de Recursos</h2>
                            <p className="lead fw-normal text-muted mb-0">Os recursos de computação do provedor são agrupados para atender a vários consumidores usando um modelo multilocatário, com diferentes recursos físicos e virtuais atribuídos e re-atribuídos dinamicamente de acordo com a demanda do consumidor. Há uma sensação de independência de localização em que o cliente geralmente não tem controle ou conhecimento sobre a localização exata dos recursos fornecidos, mas pode especificar a localização em um nível mais alto de abstração (por exemplo, país, estado ou datacenter). Exemplos de recursos incluem armazenamento, processamento, memória e largura de banda de rede.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded mb-5 mb-lg-0" src="/elasticidade.png" style={{width:'300px'}} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Elasticidade</h2>
                            <p className="lead fw-normal text-muted mb-0">Os recursos podem ser provisionados e liberados de forma elástica, em alguns casos automaticamente, para escalar rapidamente para fora e para dentro de acordo com a demanda. Para o consumidor, os recursos disponíveis para provisionamento geralmente parecem ilimitados e podem ser apropriados em qualquer quantidade a qualquer momento.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
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
            </section>
           
            
        </div>
    )
}