export default function Paas() {

    return (
        <div>
            <section>
                <div className="container px-5 my-5">
                    <div className="text-end mb-5 mb-xl-0">
                        <a type="button" className="btn btn-primary border border-dark" href="/Saas/about">
                            Próximo passo: SaaS - Conceito
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <article>                
                            <header className="mb-4">
                            <h1 className="fw-bolder mb-1"><em>PaaS</em> - Plataforma como Serviço</h1>
                            <p className="lead fw-normal text-muted fs-5 mb-0">No vídeo da plataforma AWS, é ilustrado como fazer o uso do S3 envolvendo a criação de um Bucket e o carregamento de arquivos nele. Isso possibilita realizar o armazenamento dos arquivos de forma segura ou para uso posterior.</p>
                            <p className="lead fw-normal text-muted fs-5 mb-0">Relacionado à plataforma Azure, é apresentado um vídeo no qual se faz a criação de uma conta e de um container para carregamento dos arquivos.</p>
                            <p className="lead fw-normal text-muted fs-5 mb-0">Por fim, envolvendo à plataforma Google Cloud, é mostrado um vídeo no qual também envolve a criação de um Bucket para o carregamento de arquivos escolhendo-o um nome, a região de armazenamento, classe de armazenamento, controle de acesso ao objeto e outras configurações, incluindo estimativas de custo.”</p>
                            </header>
                
                            <section className="mb-5"  style={
                                {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '12px'
                                }
                            }>
                                <h1 className="fw-bolder mb-1"><em>PaaS - Amazon S3</em></h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/N2iKkI0ogas" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                <p></p>

                                <h1 className="fw-bolder mb-1"><em>PaaS - Azure Contas de Armazenamento</em></h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/56ptmPsNhhM" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p></p>

                                <h1 className="fw-bolder mb-1"><em>PaaS - Google Cloud Storage</em></h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/V6iO66MnBq0" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p></p>

                         
                            </section>
                            <p className="lead fw-normal text-muted fs-5 mb-0">Caso houver algum problema, assista os vídeos diretamente pelo YouTube utilizando os botões abaixo:</p>
                            <a className="btn btn-primary btn-md border border-dark" href="https://www.youtube.com/watch?v=N2iKkI0ogas" target="_blank" rel="noopener noreferrer">PaaS - Amazon S3</a>
                            <p></p>
                            <a className="btn btn-primary btn-md border border-dark" href="https://www.youtube.com/watch?v=56ptmPsNhhM" target="_blank" rel="noopener noreferrer">PaaS - Azure Contas de Armazenamento</a>
                            <p></p>
                            <a className="btn btn-primary btn-md border border-dark" href="https://www.youtube.com/watch?v=V6iO66MnBq0" target="_blank" rel="noopener noreferrer">PaaS - Google Cloud Storage</a>

                        </article>
                        <div className="container px-5 my-5">
                            <div className="text-end mb-5 mb-xl-0">
                                <a type="button" className="btn btn-primary border border-dark" href="/Saas/about">
                                    Próximo passo: SaaS - Conceito
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