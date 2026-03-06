

const Contact = ({img , nombre , mensajes , time}) => {
  return (
    <>
        <li className='user-chat'>
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