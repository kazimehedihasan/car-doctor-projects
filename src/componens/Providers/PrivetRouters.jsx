
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouters = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user?.email) {
        return children;
    }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>
};


export default PrivetRouters;