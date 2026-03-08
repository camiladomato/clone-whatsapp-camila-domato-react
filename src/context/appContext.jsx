import { useContext, createContext, useState } from "react";
import { users } from "../services/mockApi.js"


const appContext = createContext()

const AppProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [contactSelect, setContactSelect] = useState({})


    const login = (emailUser, passwordUser) => {
        const userLogueado = users.find((user) => user.email === emailUser && user.password === passwordUser)

        if (!userLogueado) {
            return false
        } else {
            setUser(userLogueado)
            return true
        }


    }

    const idContactoSeleccionado = (idUser) => {
        setContactSelect(user.contactos.find((contacto) => contacto.id == idUser))
    }


    return (
        <appContext.Provider value={{user, contactSelect, setContactSelect, idContactoSeleccionado, login }}>
            {children}
        </appContext.Provider>
    )
}

export { AppProvider, appContext };