import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import {ReadmePage} from "../pages/ReadmePage"
import {Register} from "../pages/Register"
import { NotFound } from "../pages/NotFound"
import App from "../App"
import { RouteProtected } from "../components/RouteProtected"


const RouterApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/ingresar" element={<Login/>}></Route>
                <Route path="/" element={<RouteProtected><App /></RouteProtected>}></Route>
                <Route path="/acerca" element={<ReadmePage />}></Route>
                <Route path="/registro" element={<Register />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export {RouterApp}