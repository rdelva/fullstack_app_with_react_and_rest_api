import {useContext} from "react";
import UserContext from "../context/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {

    const {authUser } = useContext(UserContext);
    const location = useLocation();
    console.log(location);

    if(authUser) {
        return <Outlet />   
    } else {
        return <Navigate to="/forbidden"  state={{from:location.pathname}} />
    }
   
}


export default PrivateRoute;