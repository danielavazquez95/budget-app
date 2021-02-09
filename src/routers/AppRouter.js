import React, { useContext, useEffect } from 'react';
import {
    HashRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Context } from '../context/Context';
import { AuthRouter } from './AuthRouter';
import { Footer } from '../ui/Footer';
import { HomeScreen } from '../components/HomeScreen';
import { NavBar } from '../ui/Navbar';
import '../css/index.css';

export const AppRouter = () => {

    const {setUserToken} = useContext(Context);
    
    useEffect(() => {
        localStorage.getItem('data') && setUserToken( JSON.parse(localStorage.getItem('data')))
    }, [])

    return (
        
        <HashRouter basename='/'>
            <div className="home-screen">
                <NavBar />
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={HomeScreen} />
                    <Redirect to="/auth"/>
                </Switch>
            </div>
            <Footer/>
        </HashRouter>
    )
};
