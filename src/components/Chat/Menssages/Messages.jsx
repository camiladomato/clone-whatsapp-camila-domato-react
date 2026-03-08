
import './styles.css'
import Message from './Menssage/Menssage'
import { appContext } from "../../../context/appContext"
import { useContext } from 'react'

const Messages = () => {

  const { contactSelect } = useContext(appContext)
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
          <div className="no-selection-content">
            <div className="icon-placeholder">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h2>¡Te damos la bienvenida!</h2>
            <p>Selecciona un contacto de la lista para empezar a conversar.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Messages