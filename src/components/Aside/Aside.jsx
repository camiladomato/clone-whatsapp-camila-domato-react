import Contacts from "./Contacts/Contacts"
import NavContact from "./NavContact/NavContact"
import Search from "./Search/Search"
import './styles.css'

const Aside = () => {
  const user = {
    name: "Camila Domato",
    img:"https://github.com/camiladomato.png",
    contactos:[{}],
  }
  return (
    <div className="aside">
      <NavContact name={user.name} img={user.img}></NavContact>
      <Search></Search>
      <Contacts></Contacts>
    </div>

  )
}

export {Aside}