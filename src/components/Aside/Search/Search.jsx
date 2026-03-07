import './styles.css'
import {useState} from "react"

const Search = ({contactos, setContactosFiltrados}) => {

  const handleChange=(event)=>{
    const valor =event.target.value
    const filtrados = contactos.filter((user) => user.nombre.toLowerCase().includes(valor.toLowerCase()))
    setContactosFiltrados(filtrados)
  }
  return (
    <div className='search'>
         <form>
          <input autoComplete="off" id="search" type="search" placeholder="Buscar un chat o iniciar uno nuevo" onChange={handleChange} />
        </form>
    </div>
  )
}

export default Search