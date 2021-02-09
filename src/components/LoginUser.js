import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { formLoginValid } from '../helpers/formLoginValid';
import {loginUser } from '../helpers/fetchOperations';



export const LoginUser = () => {

    const initialValue = {
      username: '',
      email:'',
      password:'',
    };

    const [user, setUser] = useState(initialValue);
    const {setUserToken, setUsername} = useContext(Context);
    const history = useHistory();


    const handlerChange = (e) => {
      setUser({...user, [e.target.name]: e.target.value})
    };

    const handlerSubmit = (e) => {
      e.preventDefault();
    
      if(formLoginValid(user)){
        loginUser(user)
        .then(data => {
          if(data.success){
            setUserToken(data);
            setUsername(user.username);
            localStorage.setItem('data', JSON.stringify(data));
            localStorage.setItem('username', JSON.stringify(user.username));
            setUser(initialValue);
            history.push('/');
          } else {
             Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'There was a problem loging in to your account. Check that your email address and password are spelled correctly.'
            })
          }});
      }
    };
   
    return (
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 mt-5 mb-1 ">
            <form className="form-container form-screen" onSubmit={handlerSubmit}  >
              <h1 className="text-center">Log in to your account!</h1>
              <hr/>
                  <label>Username:</label>
                  <input 
                      type="text" 
                      name="username" 
                      className="form-control my-3" 
                      autoComplete="off"
                      onChange={handlerChange}
                      />
                  <label>Email:</label>
                  <input 
                      type="text" 
                      name="email"
                      className="form-control my-3" 
                      autoComplete="off"
                      onChange={handlerChange}
                    />
                  <label>Password:</label>
                  <input 
                      type="password" 
                      name="password"
                      className="form-control my-3" 
                      autoComplete="off"
                      onChange={handlerChange}
                    />

                  <div className="d-grid gap-2">
                    <button 
                        type="submit"
                        className="btn btn-success btn-block my-3"
                        autoComplete="off"
                      >
                            Log in
                    </button>
                    <hr/>
                    <Link className="text-center" to="/auth/register"> Don't have an account? Sign up </Link> 
                </div>
          </form>
          </div> 
        </div>
      </div> 
    )
}
