import React  from 'react';
import { OperationScreen } from './OperationScreen';

export const ListOperation = ({operationsData, handleDeleteOperation, handleUpdateOperation, loadingStatus}) => {

    const operationsList = operationsData.length < 10 ? operationsData : operationsData.slice(-10);
    const entryData = operationsList.filter(operation => operation.type === 'Entry');
    const expenseData = operationsList.filter(operation => operation.type === 'Expense');
    
    const balance = () => {

        let entry = 0;
        let expense = 0;

        entryData.forEach(operation => entry += Number(operation.price));
        expenseData.forEach(operation => expense += Number(operation.price));

        return entry - expense;

    };
    
    const isNegativeNumber = () => {
        if (balance() > 0){
            return true
        } else if (balance() < 0 ){
            return false
        }
        return 'equal';
    };


    return (
    
        <div className="col mt-5 mb-5"> 
            <div className="form-container" >
             <h3 className='text-center'>Current balance:<span className={`text-center ${(isNegativeNumber() === 'equal') || (isNegativeNumber() ? 'text-success' : 'text-danger')}`} >{` $${ balance()}`}</span></h3>
                <hr/> 
                <h4 className="text-center">Operations</h4>
                <hr/>  
                {loadingStatus ? <h4 className="animate__animated animate__flash d-block text-center">Loading...</h4> :
                (<div className="row">
                    <div className="col">
                        <h4 className="text-center pb-2">Entry</h4>
                        { 
                            entryData.map( operation =>  <OperationScreen key={operation.id} operation={operation} handleDeleteOperation={handleDeleteOperation}  handleUpdateOperation={handleUpdateOperation} layout='alert alert-primary p-1'/>)
                        }
                    </div>
                    <div className="col">
                        <h4 className="text-center pb-2">Expenses</h4>
                        {   
                            expenseData.map( operation =>  <OperationScreen key={operation.id} operation={operation} handleDeleteOperation={handleDeleteOperation} handleUpdateOperation={handleUpdateOperation} layout='alert alert-danger p-1' />)
                        }
                    </div>
                </div>
                )}
            </div>
        </div>
    
    )
};

