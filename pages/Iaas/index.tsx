export default function Iaas() {

    return (
        <div>
            <section>
                <div className="container px-5 my-5">
                    <div className="text-end mb-5 mb-xl-0">
                        <a type="button" className="btn btn-primary border border-dark" href="/Paas/about">
                            Próximo passo: PaaS - Conceito
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <article>                
                            <header className="mb-4">
                            <h1 className="fw-bolder mb-1"><em>IaaS</em> - Infraestrutura como Serviço</h1>
                            <p className="lead fw-normal text-muted fs-5 mb-0">A seguir serão apresentados vídeos contendo um caso de uso de <em>IaaS</em> envolvendo a criação de Máquinas Virtuais nas plataformas: <em>Amazon Web Services (AWS),  Microsoft Azure (Azure) e Google Cloud Platform (GCP)</em>.</p>
                            <p className="lead fw-normal text-muted fs-5 mb-0">Na criação da máquina virtual de cada plataformas é detalhada a configuração das características desejadas, tais como: capacidade de processamento, tamanho de memória, tamanho de disco, versão do Sistema Operacional, assinatura, custo e outras configurações menores.</p>
                            </header>
                
                            <section className="mb-5">
                                <h1 className="fw-bolder mb-1"><em>IaaS - AWS</em></h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/-9qsbPqfmY8" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                <p></p>

                                <h1 className="fw-bolder mb-1"><em>IaaS - Azure</em></h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/rbT4NlT4M9o" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p></p>

                                <h1 className="fw-bolder mb-1"><em>IaaS - Google</em></h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/IYQgCsnzvIw" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p></p>
                            </section>
                            
                            <p className="lead fw-normal text-muted fs-5 mb-0">Caso houver algum problema, assista os vídeos diretamente pelo YouTube utilizando os botões abaixo:</p>
                            <a className="btn btn-primary btn-md border border-dark" href="https://www.youtube.com/watch?v=-9qsbPqfmY8" target="_blank" rel="noopener noreferrer">IaaS - AWS</a>
                            <p></p>
                            <a className="btn btn-primary btn-md border border-dark" href="https://www.youtube.com/watch?v=rbT4NlT4M9o" target="_blank" rel="noopener noreferrer">IaaS - Azure</a>
                            <p></p>
                            <a className="btn btn-primary btn-md border border-dark" href="https://www.youtube.com/watch?v=IYQgCsnzvIw" target="_blank" rel="noopener noreferrer">IaaS - Google</a>


                        </article>
                        <div className="container px-5 my-5">
                            <div className="text-end mb-5 mb-xl-0">
                                <a type="button" className="btn btn-primary border border-dark" href="/Paas/about">
                                    Próximo passo: PaaS - Conceito
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}