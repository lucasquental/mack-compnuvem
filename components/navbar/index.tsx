import { DropdownButton } from "../dropdown";

export function Navbar(){
 
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-items-center">
      <div className="container px-5">
          <a className="navbar-brand" href="/">Computação em Nuvem</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item"><a className="nav-link" href="/">Menu</a></li>
                  <li className="nav-item"><a className="nav-link" href="/About">Sobre</a></li>
                  <li className="nav-item"><a className="nav-link" href="/Conceito">Conceito</a></li>
                  <li className="nav-item ">
                    <DropdownButton title="Iaas" aboutUrl="/Iaas/about"  functionUrl="/Iaas"/>
                  </li>
                  <li className="nav-item ">
                    <DropdownButton  title="Paas" aboutUrl="/Paas/about"  functionUrl="/Paas"/>
                  </li>
                   <li className="nav-item ">
                    <DropdownButton title="Saas" aboutUrl="/Saas/about"  functionUrl="/Saas"/>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="/Questionario">Teste seu Conhecimento</a></li>
                  <li className="nav-item"><a className="nav-link" href="/FAQ">FAQ</a></li>
                  <li className="nav-item"><a className="nav-link" href="/Contact">Contato</a></li>         
              </ul>
          </div>
      </div>
  </nav>
    )

}