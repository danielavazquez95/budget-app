import React from 'react';

export const Footer = () => {

    return (
         
        <div className="footer">
            <footer className=" bg-dark py-4">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h5 className="text-white d-inline">Created and designed by Daniela Vazquez - ©2021</h5> 
                            <br/>
                            <label className="text-white d-inline text-secondary"> Buenos Aires - Argentina </label>                                                   
                            <hr className="w-50"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <a className="nav-item nav-link d-inline text-white" href="https://github.com/danielavazquez95" target="_blank">
                                <i className="fab fa-github" />
                            </a>
                            <a className="nav-item nav-link d-inline text-white" href="mailto:danielavazquez95@gmail.com" target="_blank">
                                <i className="far fa-envelope"/>
                            </a>
                        </div>  
                    </div>
                </div>      
            </footer>
        </div>
    )
}