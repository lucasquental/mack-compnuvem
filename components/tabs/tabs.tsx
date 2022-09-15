
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Tabss() {

  const [answer1,setAnswer1] = useState('0')
  const [answer2,setAnswer2] = useState('0')
  const [answer3,setAnswer3] = useState('0')
  const [answer4,setAnswer4] = useState('0')
  const [answer5,setAnswer5] = useState('0')
  const [answer6,setAnswer6] = useState('0')
  const [answer7,setAnswer7] = useState('0')
  const [answer8,setAnswer8] = useState('0')
  const [total,setTotal] = useState(0)
  const [showTotal,setShowTotal] = useState(true)

  console.log('Reposta é ',answer1)

function givemeTotal(){
var intAnswer1 : number = +answer1
var intAnswer2 : number = +answer2
var intAnswer3 : number = +answer3
var intAnswer4 : number = +answer4
var intAnswer5 : number = +answer5
var intAnswer6 : number = +answer6
var intAnswer7 : number = +answer7
var intAnswer8 : number = +answer8
  setTotal(intAnswer1+intAnswer2+intAnswer3+intAnswer4+intAnswer5 +intAnswer6+intAnswer7+intAnswer8)
  setShowTotal(!showTotal)
 
}

function backQuest(){
  setShowTotal(!showTotal)
  setTotal(0)
}
 
  return (

    <form>
 
   {
    showTotal ?  <Tabs
    defaultActiveKey="Questão1"
    transition={false}
    id="noanim-tab-example"
    className="mb-3"

  >
    <Tab eventKey="Questão1" title="Questão 1">
      <h2> O que significa IaaS?</h2>
   
      <input type="radio" value={1} name="teste" placeholder="asdasd" onChange={(e)=>setAnswer1(e.target.value)} /> <span>Infraestrutura como Serviço</span> <br />
      <input type="radio" value={0} name="teste" placeholder="asdasd" onChange={(e)=>setAnswer1(e.target.value)}/> <span>Plataforma como Serviço</span> <br />
      <input type="radio" value={0} name="teste" placeholder="asdasd" onChange={(e)=>setAnswer1(e.target.value)}/> <span>Software como Serviço</span> <br />
      <input type="radio" value={0} name="teste" placeholder="asdasd" onChange={(e)=>setAnswer1(e.target.value)}/> <span>Desktop como Serviço</span> <br />
      <input type="radio" value={0} name="teste" placeholder="asdasd" onChange={(e)=>setAnswer1(e.target.value)}/> <span>Rede como Serviço</span>
    </Tab>

    <Tab eventKey="Questão2" title="Questão 2">
      <h2> O que significa PaaS?</h2>

      <input type="radio" value={0}  name="teste" placeholder="asdasd" onChange={(e)=>setAnswer2(e.target.value)}  /> <span>Software como Serviço</span> <br />
      <input type="radio" value={0}  name="teste" placeholder="asdasd" onChange={(e)=>setAnswer2(e.target.value)}  /> <span>Desktop como Serviço</span> <br />
      <input type="radio" value={0}  name="teste" placeholder="asdasd" onChange={(e)=>setAnswer2(e.target.value)} /> <span>Infraestrutura como Serviço</span> <br />
      <input type="radio" name="teste" placeholder="asdasd" value={1}  onChange={(e)=>setAnswer2(e.target.value)} /> <span>Plataforma como Serviço</span> <br />
      <input type="radio"  value={0}  name="teste" placeholder="asdasd" onChange={(e)=>setAnswer2(e.target.value)} /> <span>Rede como Serviço</span>
    </Tab>

    <Tab eventKey="Questão3" title="Questão 3" >
      <h2> O que significa SaaS?</h2>

      <input type="radio" value={0} onChange={(e)=>setAnswer3(e.target.value)}  name="teste" placeholder="asdasd" /> <span>Infraestrutura como Serviço</span> <br />
      <input type="radio"  value={0} onChange={(e)=>setAnswer3(e.target.value)}  name="teste" placeholder="asdasd" /> <span>Desktop como Serviço</span> <br />
      <input type="radio"  value={0} onChange={(e)=>setAnswer3(e.target.value)} name="teste" placeholder="asdasd" /> <span>Plataforma como Serviço</span> <br />
      <input type="radio"  value={0} onChange={(e)=>setAnswer3(e.target.value)}  name="teste" placeholder="asdasd" /> <span>Rede como Serviço</span> <br />
      <input type="radio"  name="teste" placeholder="asdasd"  value={1} onChange={(e)=>setAnswer3(e.target.value)} /> <span>Software como Serviço</span> <br />
    </Tab>

    <Tab eventKey="Questão4" title="Questão 4">
      <h2> Selecione o exemplo correto de um(a) IaaS?</h2>

      <input type="radio"  value={0} onChange={(e)=>setAnswer4(e.target.value)} name="teste" placeholder="asdasd" /> <span>Amazon S3</span> <br />
      <input type="radio"  name="teste" placeholder="asdasd" value={1}  onChange={(e)=>setAnswer4(e.target.value)}  /> <span>Máquina Virtual</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer4(e.target.value)} name="teste" placeholder="asdasd" /> <span>Gmail</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer4(e.target.value)} name="teste" placeholder="asdasd" /> <span>Prime Video</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer4(e.target.value)} name="teste" placeholder="asdasd" /> <span>Office 365</span>
    </Tab>

    <Tab eventKey="Questão5" title="Questão 5">
      <h2> Selecione o exemplo correto de um(a) PaaS?</h2>

      <input type="radio" value={0} onChange={(e)=>setAnswer5(e.target.value)} name="teste" placeholder="asdasd" /> <span>Prime Video</span> <br />
      <input type="radio"  name="teste" placeholder="asdasd" value={1}  onChange={(e)=>setAnswer5(e.target.value)}  /> <span>Amazon S3</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer5(e.target.value)} name="teste" placeholder="asdasd" /> <span>Office 365</span> <br />
      <input type="radio"value={0} onChange={(e)=>setAnswer5(e.target.value)}name="teste" placeholder="asdasd" /> <span>Gmail</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer5(e.target.value)} name="teste" placeholder="asdasd" /> <span>Máquina Virtual</span> <br />
  
    </Tab>
    <Tab eventKey="Questão6" title="Questão 6" >
      <h2> Selecione o exemplo correto de um(a) SaaS?</h2>

      <input type="radio" value={0} onChange={(e)=>setAnswer6(e.target.value)} name="teste" placeholder="asdasd" /> <span>Máquina Virtual</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer6(e.target.value)} name="teste" placeholder="asdasd"  /> <span>Azure Contas de Armazenamento</span> <br />
      <input type="radio" name="teste" placeholder="asdasd" value={1}  onChange={(e)=>setAnswer6(e.target.value)} /> <span>Prime Video</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer6(e.target.value)} name="teste" placeholder="asdasd" /> <span>Amazon S3</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer6(e.target.value)} name="teste" placeholder="asdasd" /> <span>Disco Virtual</span>
    </Tab>
    <Tab eventKey="Questão7" title="Questão 7">
      <h2> Qual serviço não é um exemplo de IaaS?</h2>

      <input type="radio" value={0} onChange={(e)=>setAnswer7(e.target.value)} name="teste" placeholder="asdasd" /> <span>Máquina Virtual</span> <br />

      <input type="radio" name="teste" placeholder="asdasd" value={1}  onChange={(e)=>setAnswer7(e.target.value)} /> <span>Amazon S3 </span> <br />

      <input type="radio" value={0} onChange={(e)=>setAnswer7(e.target.value)}  name="teste" placeholder="asdasd" /> <span>Servidor Virtual</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer7(e.target.value)}  name="teste" placeholder="asdasd" /> <span>HD Virtual</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer7(e.target.value)}  name="teste" placeholder="asdasd" /> <span>Memória Virtual</span>
    </Tab>
    <Tab eventKey="Questão8" title="Questão 8">
      <h2>Qual serviço não é um exemplo de PaaS?</h2>

      <input type="radio" value={0} onChange={(e)=>setAnswer8(e.target.value)}  name="teste" placeholder="asdasd" /> <span>Amazon EC2</span> <br />

      <input type="radio" value={0} onChange={(e)=>setAnswer8(e.target.value)}  name="teste" placeholder="asdasd" /> <span>Amazon S3 </span> <br />

      <input type="radio"  name="teste" placeholder="asdasd" value={1}  onChange={(e)=>setAnswer8(e.target.value)}  /> <span>Gmail</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer8(e.target.value)}  name="teste" placeholder="asdasd" /> <span>Azure Contas de Armazenamento</span> <br />
      <input type="radio" value={0} onChange={(e)=>setAnswer8(e.target.value)}  name="teste" placeholder="asdasd" /> <span>Google Cloud Storage</span>
    </Tab>
  </Tabs>:
  <>
  <div>
    Sua pontuação foi de {total} de 8
  </div>
  <div className="modal-footer">
           <button type="button" className="btn btn-secondary" data-dismiss="modal" >Fechar</button>
           <button type="button"  className="btn btn-primary"  onClick={backQuest}>Voltar</button>
          </div>
  </>
   }

   {
     showTotal && <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal" >Fechar</button>
      <button type="button"  className="btn btn-primary"  onClick={givemeTotal}>Finalizar</button>
     </div>
   }
   
    </form>
  );



  }