import React, { useContext, useRef, useState } from 'react';
import { Context } from '../context/Context';
import { isFormValid } from '../helpers/formOperationValid';
import { postOperation } from '../helpers/fetchOperations';

export const RegisterOperationForm = ({handleNewOperation}) => {

  const {userToken} = useContext(Context);

  const initialValue = {
    id: Math.floor(Math.random() * 100),
    concept:'',
    price: null,
    date:'',
    type:'Click to select',
    userId: JSON.parse(localStorage.getItem('data')).id
  };

  const [formData, setFormData] = useState(initialValue);

  const formRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(isFormValid(formData)) {
      handleNewOperation(formData);
      postOperation(userToken.success, formData);
      formRef.current.reset();
      setFormData(initialValue);
    }
   
  };  

  return (

        <div className="col-lg-4 mt-5">
            <form className="form-container" ref={formRef} onSubmit={handlerSubmit}>
              <h1 className="text-center">Add new operation</h1>
              <hr/>
                  <label>Concept:</label>
                  <input 
                      type="text" 
                      name="concept" 
                      className="form-control my-3" 
                      autoComplete="off"
                      onChange= {(e)=> setFormData({...formData, concept: e.target.value})}
                      />
                  <label>Price:</label>
                  <input 
                      type="number" 
                      name="price"
                      className="form-control my-3" 
                      autoComplete="off"
                      onChange= {(e)=> setFormData({...formData, price: e.target.value})}
                    />
                  <label>Date:</label>
                  <input 
                      type="date" 
                      name="date"
                      className="form-control my-3" 
                      autoComplete="off"
                      onChange= {(e)=> setFormData({...formData, date: e.target.value})}
                    />
                  <label>Type:</label>
                  <select className="form-control my-3" onChange={(e) => setFormData({...formData, type: e.target.value})}>
                    <option >Click to select</option>
                    <option >Entry</option>
                    <option >Expense</option>
                  </select>
                  <div className="d-grid gap-2">
                    <button 
                        type="submit"
                        className="btn btn-success btn-block my-3"
                        autoComplete="off"
                      >
                            Add operation
                    </button>
                </div>
          </form>
        </div>                    
  )
};
