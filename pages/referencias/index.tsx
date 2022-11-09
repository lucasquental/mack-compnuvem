import Tabss from "../../components/tabs/tabs";
import Image from 'next/image'

export default function About(){

    return(
        <div>
            <header className="py-5">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="text-center">
                            <h1 className="fw-bolder mb-3">Referências</h1>
                            <p className="lead fw-normal text-muted mb-4">Referências utilizadas para compôr o Recurso Educacional Digital.</p>
                        </div>
                    </div>
                </div>
            </header>
         
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <p className="lead fw-normal"><strong><em>IaaS, PaaS e SaaS</em> : </strong><em>https://www.gov.br/governodigital/pt-br/estrategias-e-politicas-digitais/computacao-em-nuvem/caracteristicas-essenciais-de-computacao-em-nuvem</em><small></small></p>
                    <p className="lead fw-normal"><em>https://azure.microsoft.com/pt-pt/resources/cloud-computing-dictionary/what-is-iaas/</em></p>
                    <p className="lead fw-normal"><em>https://azure.microsoft.com/pt-pt/resources/cloud-computing-dictionary/what-is-paas/</em></p>
                    <p className="lead fw-normal"><em>https://azure.microsoft.com/pt-pt/resources/cloud-computing-dictionary/what-is-saas/</em></p>
                    <p className="lead fw-normal"><em>Mahmood, Z. (2015). Cloud Computing: Methods and Practical Approaches (Computer Communications and Networks) (2013th ed.). Springer. p48.</em></p>
                    <p className="lead fw-normal"><strong><em>Definição de Computação em Nuvem</em> : </strong><em>https://www.nist.gov/publications/nist-definition-cloud-computing</em><small></small></p>
                    <p className="lead fw-normal"><em>https://www.gov.br/governodigital/pt-br/estrategias-e-politicas-digitais/computacao-em-nuvem/caracteristicas-essenciais-de-computacao-em-nuvem/</em></p>
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