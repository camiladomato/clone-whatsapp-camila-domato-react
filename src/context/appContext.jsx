import { useContext, createContext, useState } from "react";
import { users } from "../services/mockApi.js"



const appContext = createContext()

const AppProvider = ({ children }) => {
    const localUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(localUser || null)
    const [contactSelect, setContactSelect] = useState({})

   

    const login = (emailUser, passwordUser) => {
        const userLogueado = users.find((user) => user.email === emailUser && user.password === passwordUser)

        if (!userLogueado) {
            return false
        } else {
            setUser(userLogueado)
            localStorage.setItem("user",JSON.stringify(userLogueado))
            return true
        }


    }

    const idContactoSeleccionado = (idUser) => {
        setContactSelect(user.contactos.find((contacto) => contacto.id == idUser))
    }

    const logOut = () =>{
        localStorage.removeItem("user")
    }

    return (
        <appContext.Provider value={{user, contactSelect, setContactSelect, idContactoSeleccionado, login , logOut}}>
            {children}
        </appContext.Provider>
    )
}

export { AppProvider, appContext };