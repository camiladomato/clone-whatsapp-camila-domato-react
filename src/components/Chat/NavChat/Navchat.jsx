import {appContext} from "../../../context/appContext"
import { useContext } from 'react'
import './styles.css'

const NavChat = () => {

  const{contactSelect}= useContext(appContext)
 console.log( contactSelect)

  return (
    <div >
      <header className="chat-header">
        <img
          src={contactSelect.img}
          alt="foto de perfil" />
        <div>
          <h3>{contactSelect.nombre}</h3>
          <p>Ultima vez {contactSelect.lastConnect} hs</p>
        </div>
      </header>
    </div>
  )
}

export default NavChat