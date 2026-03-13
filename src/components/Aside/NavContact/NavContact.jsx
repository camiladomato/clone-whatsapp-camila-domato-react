import { MdOutlineLogout } from "react-icons/md";
import { GrDocumentConfig } from "react-icons/gr";
import { FaImage } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { appContext } from "../../../context/appContext";
import {useContext} from "react"
import { useNavigate } from "react-router-dom";
import ToolTip from "../../ToolTip/ToolTip";

import './styles.css'



const NavContact = ({name , img}) => {

  const{logOut}= useContext(appContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logOut()
    navigate("/ingresar")
  }

  return (
    <div className="NavContact">
         <div className="perfil">
          <img src={img} alt={`Foto de perfil de ${name}`} />
          <h2>{name}</h2>
        </div>
        <div className="acciones">
          <ToolTip text="Tomar foto">
            <button>
            <FaCamera />
          </button>
          </ToolTip>
          <ToolTip text="Enviar imagen">
            <button>
          <FaImage />
          </button>
          </ToolTip>
          <ToolTip>
            <button>
            <GrDocumentConfig />
          </button>
          </ToolTip>
          <ToolTip>
            <button onClick={handleLogout}>
            <MdOutlineLogout />
          </button>
          </ToolTip>
        </div>
    </div>
  )
}

export default NavContact