import './styles.css'
import Contact from './Contact/Contact'

const Contacts = ({contactos}) => {


  return (
    <section className='chats'>
        <ul>
              {contactos.map((contacto) => (
                <Contact img={contacto.img} nombre={contacto.nombre} mensajes={contacto.mensajes} time={contacto.time} key={contacto.id}>
                </Contact>
      ))}
        </ul>
    </section>
  )
}

export default Contacts