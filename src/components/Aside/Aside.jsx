import { useState } from "react"
import Contacts from "./Contacts/Contacts"
import NavContact from "./NavContact/NavContact"
import Search from "./Search/Search"
import {user} from "../../services/mockApi.js"
import './styles.css'

const Aside = () => {

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