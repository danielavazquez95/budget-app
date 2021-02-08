import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from '../context/Context';
import { getOperations } from '../helpers/fetchOperations';
import { ListOperation } from './ListOperation';
import { RegisterOperationForm } from './RegisterOperationForm';


export const HomeScreen = () => {  
    
    const {userToken, loadingStatus, setLoadingStatus } = useContext(Context)
    const [operationsData, setOperationsData] = useState([]);


    useEffect(() => {

        if(userToken.success) {
            getOperations(userToken.success, userToken.id)
            .then( operations => {
                setOperationsData(operations);
                setLoadingStatus(false);
            });
        };

    }, [userToken.success, userToken.id ]);
    
    
    const handleNewOperation = (operation) => {
        setOperationsData([...operationsData, operation]);
    };

    const handleDeleteOperation = (data) => {
        const operationDelete = [...operationsData].filter(operation => operation.id !== data.id );
        setOperationsData(operationDelete);
    };

    return (
        <>
        {
             (userToken.success ||  localStorage.getItem('data') ) ? 
             (<div className="container box">
                <div className="row justify-content-center">
                    <RegisterOperationForm handleNewOperation={handleNewOperation}/>
                    <ListOperation operationsData={operationsData} handleDeleteOperation={handleDeleteOperation} loadingStatus={loadingStatus}/>
                </div>
            </div>)
            :
            (<Redirect to="/auth/login"/>)
        }
        </>
    )
};
