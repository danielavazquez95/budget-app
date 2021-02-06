import React, { useContext } from 'react';
import { NavLink} from 'react-router-dom';
import { Context } from '../context/Context';
import { NavMobile } from './NavMobile';

export const NavBar = (props) => {

    const {userToken,setUserToken} = useContext(Context);


    const handlerClick = () => {
        setUserToken({});
        localStorage.clear();
    };

    return (
       
            <div> 
            <NavMobile />
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-none d-md-flex">
                <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNav">
                    {
                        userToken.success ? 

                        <NavLink
                        activeClassName="active"
                        className="nav-item nav-link text-danger d-none d-md-inline" 
                        to="#"
                        onClick={handlerClick}
                        >
                        Log out
                        </NavLink>

                        :
                        
                        <ul className="navbar-nav">
                         <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link d-none d-md-inline" 
                            exact to="/auth/register" >
                            Sign in
                        </NavLink>
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link d-none d-md-inline" 
                            exact to="/auth/login" >
                            Log in
                        </NavLink>
                    </ul>
                    }           
                </div>
              </nav>
          </div>  
               
      
    )
};