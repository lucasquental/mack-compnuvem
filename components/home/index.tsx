
export function HomePage(){

    return(
<>
        <header className="background-menu-foto" style={{backgroundImage:`url("/customgifnuvem.gif")`,backgroundRepeat:'no-repeat',backgroundSize:'cover',width: '100%', backgroundPosition:'center',height: '552px'}}>
        <div className="container px-5 ">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-1 fw-bolder mb-2" style={{color:'white'}}>Cloud Computing</h1>
                                <p className="lead fw-normal mb-4"style={{fontSize:'30px',color:'white'}}>O que é a computação em nuvem, quais os modelos de computação em nuvem e como usá-los?</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Saber Mais</a>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"></div>
                    </div>
                </div>
            </header>
            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className=" gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">Do começo!</h2></div>
                        <div className="col-lg-12" style={{marginTop:'50px'}}>
                            <div className="row">
                               
                                <div style={{width:'400px'}}>
                                    <div className="feature inline-block p-2 bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-building w-[51px]"></i></div>
                                    <h2 className="h5">IaaS – Infraestrutura como serviço</h2>
                                    <p className="mb-0">Na Infraestrutura como serviço, são oferecidas opções de hardware virtual para criação de infraestruturas das mais diversas finalidades.</p>
                                </div>
                                <div className="mb-5 mb-md-0 h-100" style={{width:'400px'}}>
                                    <div className="feature inline-block p-2 bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-box w-[51px]"></i></div>
                                    <h2 className="h5">PaaS – Plataforma como Serviço</h2>
                                    <p className="mb-0">Na Plataforma como serviço, são oferecidas soluções práticas de computação em nuvem, uma vez que não é necessário se preocupar com o hardware que funciona por trás da plataforma.</p>
                                </div>
                                <div className="h-100"style={{width:'400px'}}>
                                    <div className="feature inline-block p-2 bg-primary bg-gradient text-white rounded-3 mb-3">
                                        <i className="bi bi-code-slash w-[51px]"></i></div>
                                    <h2 className="h5">SaaS – Software como serviço</h2>
                                    <p className="mb-0">No Software como serviço, temos softwares prontos, com finalidades especificas fazendo com que o usuário final não precise instalar nada na maquina e nem se preocupar com hardware ou software específicos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">"A computação em nuvem é definida por 5 características necessárias, sendo elas: Elasticidade, Escalabilidade, Amplo acesso a rede, Conjunto de recursos e Serviço medido"</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    
                                </div>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-center">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="/About">Sobre a Computação em Nuvem</a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                                <h2 className="fw-bolder">Saiba mais sobre!</h2>
                                <p className="lead fw-normal text-muted mb-5">Definições especificas de cada modelo de Computação em Nuvem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="/iaas.png" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">IaaS</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="/Iaas/about"><h5 className="card-title mb-3">IaaS – Infraestrutura como serviço</h5></a>
                                    <p className="card-text mb-0">Seria para empresas que buscam mais autonomia na configuração e gerenciamento de suas aplicações.</p>
                                </div>
                                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="paas.png" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">PaaS</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="/Paas/about"><h5 className="card-title mb-3">PaaS – Plataforma como Serviço</h5></a>
                                    <p className="card-text mb-0">Como uma plataforma completa, envolvendo hardware, software e infraestrutura para o desenvolvimento, implantação e gerenciamento de uma aplicação própria.</p>
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
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">SaaS</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="/Saas/about"><h5 className="card-title mb-3">SaaS – Software como serviço</h5></a>
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
            </section>
            

            </>
    )
}