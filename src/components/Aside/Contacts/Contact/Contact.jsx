
import {appContext} from "../../../../context/appContext"
import { useContext } from 'react'

const Contact = ({img , nombre , mensajes , time , id }) => {

    const{idContactoSeleccionado}= useContext(appContext)

const handleClick = (event) => {
  const idUser = event.currentTarget.id
  idContactoSeleccionado(idUser)  
} 

  return (
    <>
        <li className='user-chat' onClick={handleClick} id={id}>
            <img src={img} alt="foto de perfil de ..." />
             <div className="chat-info">
              <h3>{nombre}</h3>
              <p>{mensajes[mensajes.length -1].text}</p>
            </div>
           <span className="time">{time}</span>
          </li>
    </>
  )
}

export default Contact