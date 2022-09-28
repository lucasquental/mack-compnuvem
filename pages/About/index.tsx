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
                                <h1 className="fw-bolder mb-3">O Recurso Educacional</h1>
                                <p className="lead fw-normal text-muted mb-4">
                                    Nesta página vamos falar um pouco sobre o Recurso Educacional aqui implementado</p>
                                <a className="btn btn-primary btn-lg" href="#scroll-target">Leia mais a respeito</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
         
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="/nist.png" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Definição</h2>
                            <p className="lead fw-normal text-muted mb-0">De acordo com o NIST (National Institute of Standards and Technology) dos Estados Unidos, a computação em nuvem necessita de seguir algumas características para ser considerada uma nuvem. As definições declaradas pelo NIST são divididas em 5 categorias:</p>
                        </div>
                    </div>
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