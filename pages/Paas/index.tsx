export default function Paas() {

    return (
        <div>
              <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-3">
                            
                            
                        </div>
                        <div className="col-lg-9">

                            <article>                
                                <header className="mb-4">
                                <h1 className="fw-bolder mb-1">PaaS - Plataforma como Serviço</h1>    
                                <p className="lead fw-normal text-muted fs-5 mb-0">Nesta sessão falaremos um pouco mais sobre o PaaS - Plataforma como Serviço.</p>
                                <p className="lead fw-normal text-muted fs-5 mb-0">Abordaremos como fazer a utilização de três plataformas de PaaS: a Amazon Web Services (AWS), a Microsoft Azure (Azure) e a Google Cloud Platform (GCP). Abaixo nós temos videos detalhando como fazer a utilização de alguns dos serviços de armazenamento de arquivos e pastas oferecidos por essas plataformas.</p>
                                </header>
                    
                                <section className="mb-5">
                                    <h1 className="fw-bolder mb-1">PaaS - Amazon S3</h1>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/N2iKkI0ogas" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                    <p className="fs-5 mb-4">No video nós vemos como fazer a utilização do S3 da AWS, no qual fazemos a criação do nosso Bucket e carregamos arquivos para ele. Nos trazendo a possibilidade de fazer uso desses arquivos posteriormente na plataforma ou apenas armazená-lo para segurança.</p>
                                    <p className="fs-5 mb-4"></p>
                                    
                                    <h1 className="fw-bolder mb-1">PaaS - Azure Contas de Armazenamento</h1>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/56ptmPsNhhM" title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <p className="fs-5 mb-4">No video nós vemos como fazer a utilização das Contas de Armazenamento da Azure, no qual fazemos a criação da nossa conta e a criação do nosso container para fazer o carregamento dos arquivos. Nos trazendo a possibilidade de fazer uso desses arquivos posteriormente na plataforma ou apenas armazena-lo para segurança também.</p>
                                    <p className="fs-5 mb-4"></p>

                                    <h1 className="fw-bolder mb-1">PaaS - Google Cloud Storage</h1>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/V6iO66MnBq0 " title="YouTube video player" frameBorder={0} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <p className="fs-5 mb-4">No video nós temos como fazer a utilização do Cloud Storage da Google, na qual escolhemos o nome do nosso bucket, a região de armazenamento, classe de armazenamento, o controle de acesso ao objeto e outras configurações, também vendo estimativas de custo conforme configuramos.</p>
                                    <p className="fs-5 mb-4"></p>
                                </section>


                            </article>
                   
                            {/* <section>
                                <div className="card bg-light">
                                    <div className="card-body">
                            
                                        <form className="mb-4"><textarea className="form-control" rows={3} placeholder="Join the discussion and leave a comment!"></textarea></form>
                            
                                        <div className="d-flex mb-4">
                                 
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                       
                                                <div className="d-flex mt-4">
                                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                    <div className="ms-3">
                                                        <div className="fw-bold">Commenter Name</div>
                                                        And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                                    </div>
                                                </div>
                            
                                                <div className="d-flex mt-4">
                                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                    <div className="ms-3">
                                                        <div className="fw-bold">Commenter Name</div>
                                                        When you put money directly to a problem, it makes a good headline.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="d-flex">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section> */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}