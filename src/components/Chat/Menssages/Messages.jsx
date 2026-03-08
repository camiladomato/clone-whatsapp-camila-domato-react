
import './styles.css'
import Message from './Menssage/Menssage'
import {appContext} from "../../../context/appContext"
import { useContext } from 'react'

const Messages = () => {
  
  const{contactSelect}= useContext(appContext)
  const userMsj = contactSelect.mensajes

  return (
   <div className='messages'>
      {contactSelect.id ? (
        contactSelect.mensajes.map((mensaje, index) => (
          <Message 
            key={index} 
            sender={mensaje.sender} 
            text={mensaje.text} 
            time={mensaje.time} 
          />
        ))
      ) : (
        <div className="no-selection">
          <h2>Selecciona un contacto para comenzar a chatear</h2>
        </div>
      )}
    </div>
  )
}

export default Messages