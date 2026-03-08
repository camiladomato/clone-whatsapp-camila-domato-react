import {HomePage} from './pages/HomePage.jsx'
import { Login } from './pages/Login.jsx'
import { AppProvider } from './context/appContext.jsx'

function App() {
 
  return (
    <>
     <AppProvider>
       <HomePage></HomePage> 
     {/* <Login></Login> */}
     </AppProvider>
    </>
  )
}

export default App
