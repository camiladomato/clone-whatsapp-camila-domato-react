import Contacts from "../Contacts/Contacts"
import NavContact from "../NavContact/NavContact"
import Search from "../Search/Search"
import './styles.css'

const Aside = () => {
  return (
    <div className="aside">
      <NavContact></NavContact>
      <Search></Search>
      <Contacts></Contacts>
    </div>

  )
}

export {Aside}