import Messages from '../Menssages/Messages.jsx'
import NavChat from '../NavChat/NavChat.jsx'
import SendMessage from '../SendMessage/SendMessage.jsx'

import './styles.css'
const Chat = () => {
  return (
    <div className='chat'>
      <NavChat></NavChat>
      <Messages></Messages>
      <SendMessage></SendMessage>
    </div>
  )
}

export {Chat}