import './styles.css'
import Contact from '../Contact/Contact'

const Contacts = () => {

const listaContactos = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    nombre: "Damian Benitez",
    msj: "ultimo msj",
    time: "11:20"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    nombre: "Sara Gómez",
    msj: "Nos vemos en la reunión",
    time: "10:45"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    nombre: "Nicolas Perez",
    msj: "Enviado el archivo",
    time: "09:15"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    nombre: "Ana Martínez",
    msj: "¿Viste el nuevo diseño?",
    time: "12:30"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    nombre: "Lucas Silva",
    msj: "Mañana te llamo sin falta",
    time: "14:15"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    nombre: "Carla Rodriguez",
    msj: "Excelente trabajo con React",
    time: "15:00"
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    nombre: "Marcos Diaz",
    msj: "Confirmado el evento de hoy",
    time: "16:45"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
    nombre: "Sofia Lopez",
    msj: "Te pasé el repo por mail",
    time: "18:20"
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop",
    nombre: "Julián Castro",
    msj: "Dale, hablamos luego.",
    time: "19:05"
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    nombre: "Valeria Ruiz",
    msj: "¿Me pasas el link de Figma?",
    time: "19:40"
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=200&h=200&fit=crop",
    nombre: "Roberto Sánchez",
    msj: "Quedó muy bien el componente.",
    time: "20:10"
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    nombre: "Elena Torres",
    msj: "Mañana desayuno y lo vemos.",
    time: "20:55"
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop",
    nombre: "Mateo Herrera",
    msj: "¡Feliz cumple che!",
    time: "21:30"
  }
];

  return (
    <section className='chats'>
        <ul>
              {listaContactos.map((contacto) => (
                <Contact img={contacto.img} nombre={contacto.nombre} msj={contacto.msj} time={contacto.time} >
                </Contact>
      ))}
        </ul>
    </section>
  )
}

export default Contacts