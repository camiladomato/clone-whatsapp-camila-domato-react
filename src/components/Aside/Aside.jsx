import Contacts from "./Contacts/Contacts"
import NavContact from "./NavContact/NavContact"
import Search from "./Search/Search"
import {user} from "../../services/mockApi.js"
import './styles.css'

const Aside = () => {

  const {name , img , contactos} = user;
  return (
    <div className="aside">
      <NavContact name={name} img={img}></NavContact>
      <Search></Search>
      <Contacts contactos={contactos}></Contacts>
    </div>

  )
}

export {Aside}