import React, { useState } from 'react';
import { Context } from '../context/Context';
import { AppRouter } from '../routers/AppRouter';
import '../css/index.css';

export const App = () => {

    const [userToken, setUserToken] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(true);

    return (
        <Context.Provider value={{ userToken, setUserToken, loadingStatus, setLoadingStatus }}> 
           <AppRouter/>
        </Context.Provider>
    )
};