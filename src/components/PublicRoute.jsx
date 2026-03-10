import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { appContext } from "../context/appContext";

const PublicRoute = ({ children }) => {
    const { user } = useContext(appContext);
  
    if (user) {
        return <Navigate to="/" />;
    }

    return children;
};

export { PublicRoute };