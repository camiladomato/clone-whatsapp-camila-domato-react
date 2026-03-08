import { useState } from 'react'
import { appContext } from '../context/appContext';
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './styles.css'

const Login = () => {

const{login}= useContext(appContext)
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

  
   const respuestaLogin = login(email,password)

   if(!respuestaLogin){
    alert("credenciales invalidas")
    return
   }

   navigate("/")
        
    setEmail("")
    setPassword("")
    
    }


    const HandleChange =(event) =>{
  
       if(event.target.name === "email"){
         setEmail(event.target.value) 
       }else if(event.target.name === "password"){
        setPassword(event.target.value)
       }
    }
    
return(
    
   <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Iniciar Sesión</h2>
        <input 
          type="email" 
          placeholder="Ingrese un email" 
          required 
          name="email" 
          onChange={HandleChange}
          value={email}
        />
        <input 
          type="password" 
          placeholder="Ingrese su contraseña" 
          name="password" 
          required 
           onChange={HandleChange}
           value={password}
        />
        <button type="submit">Enviar</button>
       
      </form>
    </div>
)
}

export {Login}