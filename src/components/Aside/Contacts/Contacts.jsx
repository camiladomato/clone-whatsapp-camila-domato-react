import './styles.css'
import Contact from './Contact/Contact'

const Contacts = ({contactos}) => {


  return (
    <section className='chats'>
        <ul>
              {contactos.map((contacto) => (
                <Contact img={contacto.img} nombre={contacto.nombre} msj={contacto.msj} time={contacto.time} key={contacto.id}>
                </Contact>
      ))}
        </ul>
    </section>
  )
}

export default Contacts