import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import {ReadmePage} from "../pages/ReadmePage"
import {Register} from "../pages/Register"
import { NotFound } from "../pages/NotFound"
import App from "../App"
import { RouteProtected } from "../components/RouteProtected"
import { PublicRoute } from "../components/PublicRoute"


const RouterApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/ingresar" element={<PublicRoute><Login/></PublicRoute>}></Route>
                <Route path="/" element={<RouteProtected><App /></RouteProtected>}></Route>
                <Route path="/acerca" element={<ReadmePage />}></Route>
                <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export {RouterApp}