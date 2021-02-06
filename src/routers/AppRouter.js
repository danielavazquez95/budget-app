import React, { useContext, useEffect } from 'react';
import {
    HashRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { HomeScreen } from '../components/HomeScreen';
import { Footer } from '../ui/Footer';
import { NavBar } from '../ui/Navbar';
import '../css/index.css';
import { AuthRouter } from './AuthRouter';
import { Context } from '../context/Context';

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
