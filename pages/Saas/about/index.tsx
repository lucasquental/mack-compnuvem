

export default function AboutSaas(){


    return(
        <div>
             <section className="py-5">
                <div className="container px-5">
                    <h1 className="fw-bolder fs-5 mb-4"><em>SaaS</em> – Software como serviço</h1>
                    <div className="card border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-0">
                            <div className="row gx-0">
                                <div className="col-lg-6 col-xl-5 py-lg-5">
                                    <div className="p-4 p-md-5">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2"><em>SaaS</em></div>
                                        <div className="h2 fw-bolder">Software como Serviço</div>
                                        <p>O <em>Software</em> como Serviço é um modelo no qual o provedor de serviços em nuvem ou um fornecedor hospeda aplicativos a serem executados na nuvem. <em>Software as a Service</em> tem feito parte do planejamento estratégico de muitas empresas. Muitos dos provedores de serviços oferecem uma interface de programação de aplicativos (API) que expõe os dados e a funcionalidade dos aplicativos aos desenvolvedores. Muitos mecanismos diferentes são usados ​​para manter os dados e o armazenamento seguros. O <em>SaaS</em> fornece implementação rápida para colocar o aplicativo em funcionamento. Inclui manutenção e suporte e o usuário não precisa de nenhum har<em>hardware</em>. <em>Software as a Service (SaaS)</em> é fácil de usar e está beneficiando muitos negócios. É muito mais barato, pois não há custos de compra ou licenciamento.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7"><div className="bg-featured-blog">
                                    <img className="card-img-bottom" src="/saas.png" alt="..." />
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container px-5">
                    <div className="row gx-5">
                        <label style={{textAlign:'center'}}>Abaixo temos alguns exemplos de provedores de <em>Software</em> como Serviço.</label>
                    </div>
                </div>
            </section>
          
            <section className="py-5">
                <div className="container px-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="">
                                <img className="card-img-top" src="/primevideo.png" alt="..." />
                                <p className="text-center mt-2">
                                <em>Prime Video</em>
                                </p>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="">
                                <img className="card-img-top" src="/gmail.png" alt="..." />
                                <p className="text-center mt-2">
                                <em>GMail</em>
                                </p>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="">
                                <img className="card-img-top" src="/office365.png" alt="..." />
                                <p className="text-center mt-2">
                                <em>Office 365</em>
                                </p>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-end mb-5 mb-xl-0">
                        <a className="text-decoration-none" href="/Saas">
                            Caso de Uso
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

