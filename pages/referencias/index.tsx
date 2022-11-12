import Tabss from "../../components/tabs/tabs";
import Image from 'next/image'

export default function About(){

    return(
        <div>
            <div className="container px-4 my-4">
                <div className="text-end mb-5 mb-xl-0">
                    <a type="button" className="btn btn-primary border border-dark" href="/About">
                        Próximo passo: Sobre
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>  
            <header className="py-1">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="text-center">
                            <h1 className="fw-bolder mb-3">Referências</h1>
                            <p className="lead fw-normal text-muted mb-4">Referências utilizadas para compôr o Recurso Educacional Digital.</p>
                        </div>
                    </div>
                </div>
            </header>
         
            <section className="py-1 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <p className="lead fw-normal"><strong><em>Definição de Computação em Nuvem</em>:</strong></p>
                    <p className="lead fw-normal"><em>GOVERNO DO BRASIL. Características essenciais de computação em nuvem. Disponível em: <a href="https://www.gov.br/governodigital/pt-br/estrategias-e-politicas-digitais/computacao-em-nuvem/caracteristicas-essenciais-de-computacao-em-nuvem" className="link" target="_blank" rel="noopener noreferrer">https://www.gov.br/governodigital/pt-br/estrategias-e-politicas-digitais/computacao-em-nuvem/caracteristicas-essenciais-de-computacao-em-nuvem</a>. Acesso em: 9 nov. 2022.</em></p>
                    <p className="lead fw-normal"><em>MELL, P. M.; GRANCE, T. The NIST Definition of Cloud Computing. Disponível em: <a href="https://www.nist.gov/publications/nist-definition-cloud-computing" className="link" target="_blank" rel="noopener noreferrer">https://www.nist.gov/publications/nist-definition-cloud-computing</a>. Acesso em: 9 nov. 2022.</em></p>
                    <p className="lead fw-normal"><strong><em>IaaS, PaaS e SaaS</em>:</strong></p>
                    <p className="lead fw-normal"><em>GOVERNO DO BRASIL. Características essenciais de computação em nuvem. Disponível em: <a href="https://www.gov.br/governodigital/pt-br/estrategias-e-politicas-digitais/computacao-em-nuvem/caracteristicas-essenciais-de-computacao-em-nuvem" className="link" target="_blank" rel="noopener noreferrer">https://www.gov.br/governodigital/pt-br/estrategias-e-politicas-digitais/computacao-em-nuvem/caracteristicas-essenciais-de-computacao-em-nuvem</a>. Acesso em: 9 nov. 2022.</em></p>
                    <p className="lead fw-normal"><em>O que é o IaaS? Infraestrutura como um Serviço | Microsoft Azure. Disponível em: <a href="https://azure.microsoft.com/pt-pt/resources/cloud-computing-dictionary/what-is-iaas/" className="link" target="_blank" rel="noopener noreferrer">https://azure.microsoft.com/pt-pt/resources/cloud-computing-dictionary/what-is-iaas/</a>. Acesso em: 9 nov. 2022.</em></p>
                    <p className="lead fw-normal"><em>O que é PaaS? Plataforma como Serviço | Microsoft Azure. Disponível em: <a href="https://azure.microsoft.com/pt-pt/resources/cloud-computing-dictionary/what-is-paas/" className="link" target="_blank" rel="noopener noreferrer">https://azure.microsoft.com/pt-pt/resources/cloud-computing-dictionary/what-is-paas/</a>. Acesso em: 9 nov. 2022.</em></p>
                    <p className="lead fw-normal"><em>O que é SaaS? Software como Serviço | Microsoft Azure. Disponível em: <a href="https://azure.microsoft.com/pt-pt/resources/cloud-computing-dictionary/what-is-saas/" className="link" target="_blank" rel="noopener noreferrer">https://azure.microsoft.com/pt-pt/resources/cloud-computing-dictionary/what-is-saas/</a>. Acesso em: 9 nov. 2022.</em></p>
                    <p className="lead fw-normal"><em>ZAIGHAM MAHMOOD. Cloud Computing Methods and Practical Approaches. [s.l.] London Springer, 2013. p. 48</em></p>
                    <p className="lead fw-normal"><strong><em>Glossário</em>:</strong></p>
                    <p className="lead fw-normal"><em>Conceitos básicos do Amazon S3 - Amazon Simple Storage Service. Disponível em: <a href="https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/GetStartedWithS3.html" className="link" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/GetStartedWithS3.html</a>. Acesso em: 9 nov. 2022.</em></p>
                    <p className="lead fw-normal"><em>O que são provedores de serviços em nuvem? Disponível em: <a href="https://www.redhat.com/pt-br/topics/cloud-computing/what-are-cloud-providers" className="link" target="_blank" rel="noopener noreferrer">https://www.redhat.com/pt-br/topics/cloud-computing/what-are-cloud-providers</a>. Acesso em: 9 nov. 2022.</em></p>
                    <p className="lead fw-normal"><em>TECNOLOGIA, H. Armazenamento em nuvem, como funciona? - HF Tecnologia. Disponível em: <a href="https://hftecnologia.com.br/armazenamento-em-nuvem-como-funciona/" className="link" target="_blank" rel="noopener noreferrer">https://hftecnologia.com.br/armazenamento-em-nuvem-como-funciona/</a>. Acesso em: 9 nov. 2022.</em></p>
                </div>
            </section>
            <div className="container px-5 my-5">
                <div className="text-end mb-5 mb-xl-0">
                    <a type="button" className="btn btn-primary border border-dark" href="/About">
                        Próximo passo: Sobre
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>    
        </div>
    )
}