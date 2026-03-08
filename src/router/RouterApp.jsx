import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Login } from "../pages/Login"
import { NotFound } from "../pages/NotFound"
import App from "../App"


const RouterApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element= {HomePage}></Route> */}
                <Route path="/login" element={<Login/>}></Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export {RouterApp}