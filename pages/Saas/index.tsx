export default function Saas() {

    return (
        <div>
            <section>
                <div className="container px-5 my-5">
                    <div className="text-end mb-5 mb-xl-0">
                        <a type="button" className="btn btn-primary border border-dark" href="/glossario">
                            Próximo passo: Glossário
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <article>                
                            <header className="mb-4">
                            <h1 className="fw-bolder mb-1"><em>SaaS</em> - Software como Serviço</h1>
                            <p className="lead fw-normal text-muted fs-5 mb-0">A seguir serão apresentados vídeos contendo um caso de uso de algumas soluções de <em>SaaS</em>, tais como: <em>Office 365, Prime Video e GMail</em>.</p>
                            <p className="lead fw-normal text-muted fs-5 mb-0">No vídeo “SaaS – Prime Video”, é apresentado como fazer uso da solução de <em>SaaS</em> para streaming de vídeos da <em>Amazon</em>, o <em>Prime Video</em>. A solução nos fornece um catálogo enorme de opções de filmes e séries para consumo, podendo fazer a pesquisa e acesso desse conteúdo por meio de qualquer aparelho compatível e com acesso à internet.</p>
                            <p className="lead fw-normal text-muted fs-5 mb-0">Em “SaaS – Office 385”, pode-se verificar como fazer uso da solução de <em>SaaS</em> da <em>Microsoft</em>, o <em>Office 365</em>. A solução é um suíte para escritório na qual o usuário pode criar e manipular documentos compatíveis a partir de qualquer ponto da internet, a qualquer hora e qualquer lugar.</p>
                            <p className="lead fw-normal text-muted fs-5 mb-0">No vídeo “SaaS – Gmail”, é mostrado como fazer uso da solução de <em>SaaS</em> da <em>Google</em>, o <em>GMail</em>. A solução permite a criação de um endereço de e-mail para uso em qualquer lugar da internet de forma gratuita, permitindo o envio e recebimento de e-mails das mais diversas categorias.</p>
                            </header>
                
                            <section className="mb-5">
                                <h1 className="fw-bolder mb-1"><em>SaaS - Prime Video</em></h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/PS6cPQyii8M" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                <p></p>
                                
                                <h1 className="fw-bolder mb-1"><em>SaaS - Office 365</em></h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/CP6vzsF148k" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p></p>

                                <h1 className="fw-bolder mb-1"><em>SaaS - GMail</em></h1>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/RjyqlXbBFnc" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <p></p>

                            <p className="lead fw-normal text-muted fs-5 mb-0">Caso houver algum problema, assista os vídeos diretamente pelo YouTube utilizando os botões abaixo:</p>
                            <a className="btn btn-primary btn-md border border-dark" href="https://www.youtube.com/watch?v=PS6cPQyii8M" target="_blank" rel="noopener noreferrer">SaaS - Prime Video</a>
                            <p></p>
                            <a className="btn btn-primary btn-md border border-dark" href="https://www.youtube.com/watch?v=CP6vzsF148k" target="_blank" rel="noopener noreferrer">SaaS - Office 365</a>
                            <p></p>
                            <a className="btn btn-primary btn-md border border-dark" href="https://www.youtube.com/watch?v=RjyqlXbBFnc" target="_blank" rel="noopener noreferrer">SaaS - GMail</a>
                            </section>
                        </article>
                        <div className="container px-5 my-5">
                            <div className="text-end mb-5 mb-xl-0">
                                <a type="button" className="btn btn-primary border border-dark" href="glossario">
                                    Próximo passo: Glossário
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