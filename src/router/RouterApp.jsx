import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { NotFound } from "../pages/NotFound"
import App from "../App"
import { RouteProtected } from "../components/RouteProtected"


const RouterApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<RouteProtected><App /></RouteProtected>}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export {RouterApp}