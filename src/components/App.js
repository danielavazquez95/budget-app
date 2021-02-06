import React, { useState } from 'react';
import { Context } from '../context/Context';
import { AppRouter } from '../routers/AppRouter';
import '../css/index.css';

export const App = () => {


    const [userToken, setUserToken] = useState({});

    return (
        <Context.Provider value={{ userToken, setUserToken }}> 
           <AppRouter/>
        </Context.Provider>
    )
};