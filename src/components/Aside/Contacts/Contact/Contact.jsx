

const Contact = ({img , nombre , msj , time}) => {
 
  return (
    <>
        <li className='user-chat'>
            <img src={img} alt="foto de perfil de ..." />
             <div className="chat-info">
              <h3>{nombre}</h3>
              <p>{msj}</p>
            </div>
           <span className="time">{time}</span>
          </li>
    </>
  )
}

export default Contact