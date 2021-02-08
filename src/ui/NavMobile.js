import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../context/Context';

export const NavMobile = (props) => {

    const [sidebar, setSidebar] = useState(false);
    const {userToken,setUserToken} = useContext(Context);
    const showSidebar = () => setSidebar(!sidebar);

    const handlerClick = () => {
        setUserToken({});
        localStorage.clear();
    };

    return (
        <>
            <div className='navbar nav-mobile d-sm-block d-md-none bg-dark' onClick={showSidebar}>
                <div  className='menu-bars'>
                    <i className="fas fa-bars d-md-none mx-3" onClick={showSidebar}/>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active bg-dark d-sm-block d-md-none' : 'nav-menu  bg-dark d-sm-block d-md-none'} onClick={showSidebar}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                 <li className='navbar-toggle bg-dark d-block'>
                    {
                        userToken.success ? 
                        <NavLink
                        activeClassName="active"
                        className="menu-bars nav-text text-danger" 
                        to="#"
                        onClick={handlerClick}
                        >
                        Log out
                        </NavLink>
                        :
                        <>
                            <NavLink 
                            activeClassName="active"
                            className="menu-bars nav-text" 
                            exact to="/auth/register" >
                            Sign in
                            </NavLink>
                            <NavLink 
                            activeClassName="active"
                            className="menu-bars nav-text" 
                            exact to="/auth/login" >
                            Log in
                            </NavLink>
                        </>
                    }
                  </li>
                </ul>
            </nav>
                    
        </>
    )
};