import Dropdown from 'react-bootstrap/Dropdown';


type DropdownProps= {
    title:string,
    quest1:string,
    quest2:string,
    quest3:string,
    quest4:string,
    quest5:string,

}

export function DropdownButtonQuest({title,quest1,quest2,quest3,quest4,quest5}:DropdownProps){

    return(
        <Dropdown >
        <Dropdown.Toggle style={{background:'transparent',border:'0',color:'#FFFFFF8C',marginTop:'2px'}} id="dropdown-basic">
          {title}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href={quest1}>Modelos como serviço</Dropdown.Item>
          <Dropdown.Item href={quest2}>Conceitos de Nuvem</Dropdown.Item>
          <Dropdown.Item href={quest3}>Questionário Amazon</Dropdown.Item>
          <Dropdown.Item href={quest4}>Questionário Azure</Dropdown.Item>
          <Dropdown.Item href={quest5}>Questionário Google</Dropdown.Item>
     
        </Dropdown.Menu>
      </Dropdown>
    )
}