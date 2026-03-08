import { useContext, createContext , useState } from "react";
import {user} from "../services/mockApi.js"

const appContext = createContext()

const AppProvider = ({children}) => {

    const[contactSelect , setContactSelect] = useState({})
    const [userContext , setUserContext] = useState(user)
    const idContactoSeleccionado = (idUser) =>{
        setContactSelect(user.contactos.find((contacto)=> contacto.id == idUser ))
    }


    return (
        <appContext.Provider value={{contactSelect,setContactSelect, userContext , idContactoSeleccionado}}>
            {children}
        </appContext.Provider>
    )
}

export {AppProvider,appContext};