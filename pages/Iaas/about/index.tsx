export default function AboutIaas(){

    return(
        <div>
            <div className="container px-5 my-5">
                <div className="text-end mb-5 mb-xl-0">
                    <a type="button" className="btn btn-primary border border-dark" href="/Iaas">
                        Próximo passo: IaaS - Caso de Uso
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
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">IaaS</div>
                                        <div className="h2 fw-bolder">Infraestrutura como Serviço</div>
                                        <p>A Infraestrutura como Serviço é um tipo de serviço de computação em nuvem em que a infraestrutura de computação é fornecida para a organização, tendo em vista suas necessidades e requisitos de negócios. Máquinas virtuais (<em>VM</em>), sistemas operacionais, componentes de tempo de execução, rede, armazenamento, dados e aplicativos estão incluídos na infraestrutura de computação. O <em>hardware</em> físico subjacente é fornecido por provedores de nuvem. Os usuários trabalham de acordo com sua infraestrutura de negócios e podem provisionar recursos de nuvem quando necessário. </p>
                                    </div>
                                </div>
                                    <div className="col-lg-6 col-xl-7"><div className="bg-featured-blog">
                                        <img className="card-img-top" src="/iaas.png" alt="..." />
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
                        <label style={{textAlign:'center'}}>Abaixo temos alguns exemplos de provedores de Infraestrutura como Serviço.</label>
                    </div>
                </div>
            </section>
          
            <section className="py-5">
                <div className="container px-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <a href="https://aws.amazon.com/" className="link" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top" src="/aws.png" alt="..." />
                                <p className="text-center mt-2">
                                <em>Amazon Web Services</em>
                                </p>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0"></div>
                            </a>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <a href="https://console.cloud.google.com/" className="link" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top" src="/gcp.png" alt="..." />
                                <p className="text-center mt-2">
                                <em>Google Cloud Platform</em>
                                </p>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0"></div>
                            </a>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <a href="https://azure.microsoft.com/" className="link" target="_blank" rel="noopener noreferrer">
                            <img className="card-img-top" src="/azure.png" alt="..." />
                                <p className="text-center mt-2">
                                <em>Microsoft Azure</em>
                                </p>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0"></div>
                            </a>
                        </div>
                    </div>
                    <div className="container px-5 my-5">
                        <div className="text-end mb-5 mb-xl-0">
                            <a type="button" className="btn btn-primary border border-dark" href="/Iaas">
                                Próximo passo: IaaS - Caso de Uso
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}