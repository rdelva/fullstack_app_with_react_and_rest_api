import { Link } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Nav = () => {
    const { authUser } = useContext(UserContext);
    return (
        /**
        * If User does not log-in they will only see SignUp and Sign in
        * If User logs in they will see their username and signout
        */
        
        <nav>
            {
                authUser === null ?
                    <>
                        <ul className="header--signedout">
                            <li><Link className="signup" to="/signup">Sign Up</Link></li>
                            <li><Link className="signin" to="/signin">Sign In</Link></li>
                        </ul>
                    </>
                    :
                    <>
                        <ul className="header--signedout">
                            <li>Welcome {authUser.firstName} </li>
                            <li><Link className="signout" to="/signout">Sign Out</Link></li>
                        </ul>
                    </>

            }

        </nav>
    );

}
export default Nav;