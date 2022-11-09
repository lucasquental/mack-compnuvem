
export function HomePage(){

    return(
<>
        <header className="background-menu-foto" style={{backgroundImage:`url("/customgifnuvem.gif")`,backgroundRepeat:'no-repeat',backgroundSize:'cover',width: '100%', backgroundPosition:'center',height: '552px',maxWidth:'1200px',margin:'0 auto'}}>
        <div className="container px-5 ">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-1 fw-bolder mb-2" style={{color:'white'}}><em>Cloud Computing</em></h1>
                                <p className="lead fw-normal mb-4"style={{fontSize:'30px',color:'white'}}>O que é a computação em nuvem, quais os modelos de computação em nuvem e como usá-los?</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    {/*<a className="btn btn-primary btn-lg px-4 me-sm-3 border border-dark" href="#features">Saber Mais</a>*/}
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"></div>
                    </div>
                </div>
            </header>

            <div className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="mb-4 d-grid d-sm-flex justify-content-center"><h2 className="fw-bolder mb-0">Do começo!</h2></div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">"A computação em nuvem é definida por 5 características necessárias, sendo elas: Elasticidade, Escalabilidade, Amplo acesso a rede, Conjunto de recursos e Serviço medido"</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    
                                </div>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-center">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3 border border-dark" href="/Conceito">Sobre a Computação em Nuvem</a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="/cloudmodels.png" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Modelos de Computação em Nuvem</h2>
                            <p className="fs-5 mb-4">Há 3 principais modelos de computação em nuvem, sendo eles: <em>IaaS</em>, <em>PaaS</em> e <em>SaaS</em></p>
                            <p className="fs-5 mb-4">Tendo na base o <em>IaaS</em>, que é a base para criação dos modelos. O <em>PaaS</em>, que é um nível onde você não tem mais acesso direto ao <em>IaaS</em> porém ainda pode desenvolver um <em>SaaS</em>. E o <em>SaaS</em> que é o produto final, distribuído para qualquer usuário, no qual o mesmo não possui acesso aos níveis inferiores. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className=" gx-5">
                        <div className="col-lg-12" style={{marginTop:'50px'}}>
                            <div className="row">
                               
                                <div style={{width:'400px'}}>
                                    <div className="feature inline-block p-2 bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-building w-[51px]"></i></div>
                                    <h2 className="h5"><em>IaaS</em> – Infraestrutura como Serviço</h2>
                                    <p className="mb-0">Na Infraestrutura como serviço, são oferecidas opções de <em>hardware</em> virtual para criação de infraestruturas das mais diversas finalidades.</p>
                                </div>
                                <div className="mb-5 mb-md-0 h-100" style={{width:'400px'}}>
                                    <div className="feature inline-block p-2 bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-box w-[51px]"></i></div>
                                    <h2 className="h5"><em>PaaS</em> – Plataforma como Serviço</h2>
                                    <p className="mb-0">Na Plataforma como serviço, são oferecidas soluções práticas de computação em nuvem, uma vez que não é necessário se preocupar com o <em>hardware</em> que funciona por trás da plataforma.</p>
                                </div>
                                <div className="h-100"style={{width:'400px'}}>
                                    <div className="feature inline-block p-2 bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-code-slash w-[51px]"></i></div>
                                    <h2 className="h5"><em>SaaS</em> – <em>Software</em> como Serviço</h2>
                                    <p className="mb-0">No <em>Software</em> como serviço, temos <em>software</em> prontos, com finalidades especificas fazendo com que o usuário final não precise instalar nada na máquina e nem se preocupar com <em>hardware</em> ou <em>software</em> específicos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">Saiba mais sobre!</h2>
                                <p className="lead fw-normal text-muted mb-5">Definições específicas de cada modelo de Computação em Nuvem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="/iaas.png" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2"><em>IaaS</em></div>
                                    <a className="text-decoration-none link-dark stretched-link" href="/Iaas/about"><h5 className="card-title mb-3"><em>IaaS</em> – Infraestrutura como serviço</h5></a>
                                    <p className="card-text mb-0"><em>IaaS</em> é direcionado para empresas que buscam mais autonomia na configuração e gerenciamento de suas aplicações.</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="PaaS.png" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2"><em>PaaS</em></div>
                                    <a className="text-decoration-none link-dark stretched-link" href="/Paas/about"><h5 className="card-title mb-3"><em>PaaS</em> – Plataforma como Serviço</h5></a>
                                    <p className="card-text mb-0">Como uma plataforma completa, envolvendo <em>hardware</em>, <em>software</em> e infraestrutura para o desenvolvimento, implantação e gerenciamento de uma aplicação própria.</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="saas.png" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2"><em>SaaS</em></div>
                                    <a className="text-decoration-none link-dark stretched-link" href="/Saas/about"><h5 className="card-title mb-3"><em>SaaS</em> – Software como serviço</h5></a>
                                    <p className="card-text mb-0">A aplicação está pronta para uso e nela não é necessária a compra de licenças para a utilização.</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           
                 
                </div>
            </section>s
            </>
    )
}