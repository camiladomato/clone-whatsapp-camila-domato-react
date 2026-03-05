import './styles.css'

const Search = () => {
  return (
    <div className='search'>
         <form>
          <input autoComplete="off" id="search" type="search" placeholder="Buscar un chat o iniciar uno nuevo" />
        </form>
    </div>
  )
}

export default Search