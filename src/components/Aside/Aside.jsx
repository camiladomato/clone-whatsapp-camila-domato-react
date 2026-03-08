import { useState , useContext} from "react"
import Contacts from "./Contacts/Contacts"
import NavContact from "./NavContact/NavContact"
import Search from "./Search/Search"
import {appContext} from "../../context/appContext"
import './styles.css'

const Aside = () => {
  const{user}= useContext(appContext)
  const {name , img , contactos} = user;
  const[contactosFiltrados,setContactosFiltrados]=useState(contactos)

  return (
    <div className="aside">
      <NavContact name={name} img={img}></NavContact>
      <Search contactos={contactos} setContactosFiltrados={setContactosFiltrados}></Search>
      <Contacts contactos={contactosFiltrados}></Contacts>
    </div>

  )
}

export {Aside}