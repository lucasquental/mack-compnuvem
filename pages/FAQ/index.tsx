export default function FAQ(){


    return(
        <div>
             <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Perguntas Frequentes</h1>
                        <p className="lead fw-normal text-muted mb-0">Como podemos ajudar?</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-xl-8">
                            
                            <h2 className="fw-bolder mb-3">Sistema &amp; Plataformas</h2>
                            <div className="accordion mb-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingOne"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">#1</button></h3>
                                    <div className="accordion-collapse collapse show" id="collapseOne1" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            XXXXXXXXXXXXXXXXXX
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">#2</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseTwo2" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            XXXXXXXXXXXXXXXXXX
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree">#3</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseThree3" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            XXXXXXXXXXXXXXXXXX
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <h2 className="fw-bolder mb-3">Sobre nós</h2>
                            <div className="accordion mb-5 mb-xl-0" id="accordionExample2">
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingOne"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">#1</button></h3>
                                    <div className="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            XXXXXXXXXXXXXXXXXX
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">#2</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            XXXXXXXXXXXXXXXXXX
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">#3</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            XXXXXXXXXXXXXXXXXX
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card border-0 bg-light mt-xl-5">
                                <div className="card-body p-4 py-lg-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">Outras perguntas?</div>
                                            <p className="text-muted mb-4">
                                                Entre em contato
                                                <br />
                                                <a className="link-dark" href="/Contact">Contato</a>
                                            </p>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}