import { useContext } from "react"
import { appContext } from "../context/appContext"
import { Navigate } from "react-router-dom"

const RouteProtected = ({children}) => {
    const{user}= useContext(appContext)

    if (!user){
        return <Navigate to="/login" replace />
    }
         return(children)
    }
   

export {RouteProtected} 