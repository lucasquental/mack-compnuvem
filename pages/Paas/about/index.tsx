export default function AboutPaas(){

    return(
        <div>
            <div className="container px-5 my-5">
                <div className="text-end mb-5 mb-xl-0">
                    <a type="button" className="btn btn-primary border border-dark" href="/Paas">
                        Próximo passo: PaaS - Caso de Uso
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <section>
                <div className="container px-5">
                    <div className="card border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-0">
                            <div className="row gx-0">
                                <div className="col-lg-6 col-xl-5 py-lg-5">
                                    <div className="p-4 p-md-5">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2"><em>PaaS</em></div>
                                        <div className="h2 fw-bolder">Plataforma como Serviço</div>
                                        <p>A Plataforma como Serviço fornece plataformas para desenvolvimento de aplicativos sem instalação de ferramentas e bibliotecas de desenvolvimento. O provedor de nuvem também fornece redes, armazenamento e servidores. A <em>PaaS</em> ajuda os usuários de negócios a reduzir os custos operacionais e aumentar sua produtividade. Em vez de se concentrar na configuração da infraestrutura, o <em>PaaS</em> permite que seus usuários se concentrem na inovação, que é mais importante. No <em>PaaS</em>, não há pressão no orçamento e nem taxas de licenciamento, pois as ferramentas estão sendo auto-provisionadas a partir da nuvem.</p>
                                    </div>
                                </div>
                                    <div className="col-lg-6 col-xl-7"><div className="bg-featured-blog" >
                                        <img className="card-img-top" src="/paas.png" alt="..." />
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
                        <label style={{textAlign:'center'}}>Neste caso, os mesmos provedores de Infraestrutura como Serviço também são provedores de Plataforma como Serviço.</label>
                    </div>
                </div>
            </section>
         
            <section className="py-5">
                <div className="container px-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="">
                                <img className="card-img-top" src="/aws.png" alt="..." />
                                <p className="text-center mt-2">
                                <em>Amazon Web Services</em>
                                </p>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="">
                                <img className="card-img-top" src="/gcp.png" alt="..." />
                                <p className="text-center mt-2">
                                <em>Google Cloud Platform</em>
                                </p>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="">
                                <img className="card-img-top" src="/azure.png" alt="..." />
                                <p className="text-center mt-2">
                                <em>Microsoft Azure</em>
                                </p>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container px-5 my-5">
                        <div className="text-end mb-5 mb-xl-0">
                            <a type="button" className="btn btn-primary border border-dark" href="/Paas">
                                Próximo passo: PaaS - Caso de Uso
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}