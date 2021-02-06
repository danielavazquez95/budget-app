import React, { useContext, useState } from 'react';
import { deleteOperation, modifyOperation } from '../helpers/fetchOperations';
import { Context } from '../context/Context';
import '../css/operationScreen.css'


export const OperationScreen = ({operation, handleDeleteOperation, layout}) => {

    const [styleEdit, setStyleEdit] = useState(true);
    const [data, setData] = useState({
        concept: operation.concept,
        price: operation.price,
        date: operation.date
    });

    const {userToken} = useContext(Context);

    const handlerClick = () => {
        setStyleEdit(!styleEdit);
   };

   const handlerChange = (e) => { 
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
   };

   const handleDeleteClick = () => {
    deleteOperation(userToken.success, operation.id);
    handleDeleteOperation(operation);
   }

    return (

        <div className={`${layout} p-3 card-operation `}>
            <div className="row mb-3">
                <input className="form-control input-operation pt-2 mb-2 text-center font-weight-bold" name="concept" defaultValue={operation.concept} disabled={styleEdit} onChange={handlerChange} />
                <label className="col-4 col-form-label text-right">Price: </label>
                <div className="col-8">
                    <input type="number" className="form-control input-operation" name="price" defaultValue={operation.price} disabled={styleEdit} onChange={handlerChange}/>
                </div>
                <label className="col-4 col-form-label text-right">Date: </label>
                <div className="col-8 pt-1">
                    <input type="date" className="form-control input-operation px-0 mx-0" name="date" defaultValue={operation.date} disabled={styleEdit} onChange={handlerChange}/>
                </div>
                <label className="col-4 col-form-label text-right">Type: </label>
                <div className="col-8 pt-1">
                    <input className="form-control input-operation" name="type" defaultValue={operation.type} disabled={true} onChange={handlerChange}/>
                </div>
            </div>
            <i className="delete-icon far fa-trash-alt ps-1 pb-3" onClick={handleDeleteClick} />
            <i className="edit-icon far fa-edit ps-2 pb-3 " onClick={handlerClick} />
           <button 
                type="button" 
                className={`btn btn-success btn-sm ms-5 ${styleEdit && 'd-none'}`} 
                onClick={() => {
                    modifyOperation(userToken.success, operation.id, data);
                    setStyleEdit(!styleEdit);
                }}
            >
               Save
           </button>
        </div>           
    )
};
