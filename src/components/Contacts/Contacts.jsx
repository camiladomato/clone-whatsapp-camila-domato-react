import './styles.css'

const Contacts = () => {
  return (
    <section className='chats'>
        <ul>
          <li className='user-chat'>
            <img src="./src/assets/dami.jpg" alt="foto de perfil de ..." />
             <div class="chat-info">
              <h3>Damian Benitez</h3>
              <p>ultimo msj</p>
            </div>
           <span class="time">11.20</span>
          </li>

          <li className='user-chat'>
            <img src="./src/assets/muichiro.jpg" alt="foto de perfil de ..." />
             <div class="chat-info">
              <h3>Grupo UTN</h3>
              <p>ultimo msj</p>
            </div>
           <span class="time">11.20</span>
          </li>

          <li className='user-chat'>
            <img src="./src/assets/mv.png" alt="foto de perfil de ..." />
             <div class="chat-info">
              <h3>Movistar</h3>
              <p>ultimo msj</p>
            </div>
           <span class="time">11.20</span>
          </li>
          
        </ul>
    </section>
  )
}

export default Contacts