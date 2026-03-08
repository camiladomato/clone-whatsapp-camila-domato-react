import { useContext, createContext , useState } from "react";
import {user} from "../services/mockApi.js"

const appContext = createContext()

const AppProvider = ({children}) => {

    const[contactSelect , setContactSelect] = useState({})
    const [userContext , setUserContext] = useState(user)


    return (
        <appContext.Provider value={{contactSelect,setContactSelect, userContext}}>
            {children}
        </appContext.Provider>
    )
}

export {AppProvider,appContext};