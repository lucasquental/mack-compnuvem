export default function Contact(){

    return(
        <div>
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