import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from '../context/Context';
import { getEntryOperations, getExpensesOperations } from '../helpers/fetchOperations';
import { ListOperation } from './ListOperation';
import { RegisterOperationForm } from './RegisterOperationForm';



export const HomeScreen = () => {  
    
    const {userToken } = useContext(Context)
    const [entryData, setEntryData] = useState([]);
    const [expenseData, setExpenseData] = useState([]);


    useEffect(() => {
        if(userToken.success) {
       getEntryOperations(userToken.success, userToken.id)
        .then(operation => {
            setEntryData(operation);
        });
 
        getExpensesOperations(userToken.success, userToken.id)
        .then(operation => {
            setExpenseData(operation)
        });
        };

    }, [userToken.success, userToken.id ]);
    
    const handleNewOperation = (operation) => {

        operation.type ==='Entry'?
        setEntryData([...entryData, operation])
        :
        setExpenseData([...expenseData, operation]);
    };

    const handleDeleteOperation = (data) => {

        const entry = [...entryData].filter(operation => operation.id !== data.id );
        const expense =[...expenseData].filter(operation => operation.id !== data.id );

        data.type === 'Entry'  ?
        setEntryData(entry) :
        setExpenseData(expense);

    };

    return (
        <>
        {
             (userToken.success ||  localStorage.getItem('data') ) ? 

             (<div className="container box">
                <div className="row">
                    <RegisterOperationForm handleNewOperation={handleNewOperation}/>
                    <ListOperation entryData={entryData} expenseData={expenseData} handleDeleteOperation={handleDeleteOperation}/>
                </div>
            </div>)
            :

            (<Redirect to="/auth/login"/>)
        }
      
        </>
    )
};
