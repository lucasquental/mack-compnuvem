import Dropdown from 'react-bootstrap/Dropdown';


type DropdownProps= {
    title:string,
    aboutUrl:string,
    functionUrl:string

}

export function DropdownButton({title,aboutUrl,functionUrl}:DropdownProps){

    return(
        <Dropdown >
        <Dropdown.Toggle style={{background:'transparent',border:'0',color:'#FFFFFF8C',marginTop:'2px'}} id="dropdown-basic">
          {title}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href={aboutUrl}>Sobre</Dropdown.Item>
          <Dropdown.Item href={functionUrl}>Caso de uso</Dropdown.Item>
     
        </Dropdown.Menu>
      </Dropdown>
    )
}