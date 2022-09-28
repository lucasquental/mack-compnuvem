export default function Contact(){

    return(
      <div>
         <section className="py-5">
                <div className="container px-5">
               
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            
                            <h1 className="fw-bolder">Entre em contato</h1>
                            <p className="lead fw-normal text-muted mb-0">Qualquer dúvida estamos à disposição.</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                              
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label htmlFor="name">Nome Completo</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">É necessário preencher o nome.</div>
                                    </div>
                         
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label htmlFor="email">Endereço de e-mail</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">É necessário um e-mail.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">E-mail não é valido.</div>
                                    </div>
                               
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label htmlFor="phone">Numero de Telefone</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">É necessário um telefone.</div>
                                    </div>
                                 
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message"  placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required"></textarea>
                                        <label htmlFor="message">Mensagem</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">É necessário uma mensagem.</div>
                                    </div>
                               
                                    <div className="d-grid"><button className="btn btn-primary btn-lg border border-dark" id="submitButton" type="submit">Enviar</button></div>
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Formulário preenchido com sucesso!</div>
                                        </div>
                                    </div>
                                  
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Erro ao enviar mensagem!</div></div>
                               
                                </form>
                            </div>
                        </div>
                    </div>
                
                 
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">Nosso time</h2>
                        <p className="lead fw-normal text-muted mb-5"></p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5 mb-xl-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="foto amilton.png" alt="..." />
                                <h5 className="fw-bolder">Amilton Costa</h5>
                        
                            </div>
                        </div>
                        <div className="col mb-5 mb-xl-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="foto quental.png" alt="..." />
                                <h5 className="fw-bolder">Lucas Quental</h5>
                            
                            </div>
                        </div>
                        <div className="col mb-5 mb-xl-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="foto naboa.png" alt="..." />
                                <h5 className="fw-bolder">Guilherme Naboa</h5>
                             
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
      </div>
    )
}