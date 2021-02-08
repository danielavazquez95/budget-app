import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isFormValid } from '../helpers/formRegisterValid';
import { registerUser } from '../helpers/fetchOperations';
import Swal from 'sweetalert2';

export const RegisterUser = () => {

    const initialValue = {
      username: '',
      email:'',
      password:'',
      password2: ''
    };
    
    const [data, setData] = useState(initialValue);
    const history = useHistory();

    const handlerChange = (e) => {
      setData({...data, [e.target.name]: e.target.value})
    };
  
    const handlerSubmit = (e) => {
      e.preventDefault();
      if(isFormValid(data)){
        registerUser(data);
        setData(initialValue);
        Swal.fire({
          icon: 'success',
          title: 'Error',
          text: 'Your account was successfully registered'
        })
        history.push('/auth/login');
      }
    };

    return (

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 mt-5 mb-1">
            <form className="form-container form-screen" onSubmit={handlerSubmit} >
              <h1 className="text-center">Sign up to get started</h1>
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
                  <label>Confirm password:</label>
                  <input 
                      type="password" 
                      name="password2"
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
                            Sign up
                    </button>
                    <hr/>
                    <Link className="text-center" to="/auth/login"> Already have an account? </Link> 
                  </div>
            </form>
            </div> 
          </div>
        </div>

    )
};
