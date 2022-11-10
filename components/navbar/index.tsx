import { DropdownButton } from "../dropdown";
import { DropdownButtonQuest } from "../dropdownquest";
import { useState } from "react";

export function Navbar(){
  const [show,setShow] = useState(false)
  const [collapse,setCollapse] = useState('')

  function handleToggler(){
    if(show==false){
      setCollapse('show')
    }else{
      setCollapse('')
    }
     setShow(!show)
  }
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-items-center">
      <div className="container px-5">
          <a className="navbar-brand" href="/">Computação em Nuvem</a>
          <button className="navbar-toggler" onClick={handleToggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className={`collapse navbar-collapse ${collapse}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item"><a className="nav-link" href="/">Menu</a></li>
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
                  <li className="nav-item"><a className="nav-link" href="/glossario">Glossário</a></li>
                  <li className="nav-item">
                    <DropdownButtonQuest 
                    title="Testes" 
                    quest1="/Questionario/modelo-servico"
                    quest2="/Questionario/conceitos-nuvem"
                    quest3="/Questionario/quest-amazon"
                    quest4="/Questionario/quest-azure"
                    quest5="/Questionario/quest-google"
                    
                    />
                  </li>
                  <li className="nav-item"><a className="nav-link" href="/referencias">Referências</a></li>
                  <li className="nav-item"><a className="nav-link" href="/About">Sobre</a></li>
                  <li className="nav-item"><a className="nav-link" href="/criacao">Criação</a></li>  
              </ul>
          </div>
      </div>
  </nav>
    )

}