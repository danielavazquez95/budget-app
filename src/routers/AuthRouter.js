import React from 'react';
import { Route } from 'react-router-dom'
import { LoginUser } from '../components/LoginUser';
import { RegisterUser } from '../components/RegisterUser';


export const AuthRouter = () => {

    return (
        <>
            <Route exact path="/auth/login" component={LoginUser}/>
            <Route exact path="/auth/register" component={RegisterUser}/>
        </>

    )
};
