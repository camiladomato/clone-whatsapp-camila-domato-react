import {appContext} from "../../../context/appContext"
import { useContext } from 'react'
import './styles.css'

const NavChat = () => {

  const{contactSelect}= useContext(appContext)
 console.log( contactSelect)

  return (
    <div >
      {contactSelect.id  ? 
      (
        <header className="chat-header">
        <img
          src={contactSelect.img}
          alt="foto de perfil" />
        <div>
          <h3>{contactSelect.nombre}</h3>
          <p>Ultima conexion {contactSelect.lastConnect} hs</p>
        </div>
      </header>
      )
      
      :(
      <div> </div>
      )
    
    }
    </div>
  )
}

export default NavChat