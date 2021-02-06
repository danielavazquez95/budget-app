import React  from 'react';
import { OperationScreen } from './OperationScreen';



export const ListOperation = ({entryData, expenseData,  handleDeleteOperation}) => {


    const balance = () => {

        let a = 0;
        let b = 0;

        entryData.forEach(operation => a += Number(operation.price));
        expenseData.forEach(operation => b += Number(operation.price));
        
        return a - b

    };
        

    console.log('dataEntry LISTADO', entryData);
    console.log('expenseData LISTADO', expenseData);
    return (
    <>
 
    {
    
        <div className="col mt-5 mb-5"> 
            <div className="form-container" >
                <h3 className="text-center">{`Current balance: $ ${ balance()} `}</h3>
             
                <hr/> 
                <h4 className="text-center">List operations</h4>
                <hr/>  
                <div className="row">
                    <div className="col">
                        <h4 className="text-center">Entry</h4>
                        {    entryData.length > 0 && 
                            entryData.map( operation =>  <OperationScreen key={operation.id} operation={operation} handleDeleteOperation={handleDeleteOperation} layout='alert alert-primary p-1'/>)
                        }
                    </div>
                    <div className="col">
                        <h4 className="text-center">Expenses</h4>
                        {   
                            expenseData.length > 0 && 
                            expenseData.map( operation =>  <OperationScreen key={operation.id} operation={operation} handleDeleteOperation={handleDeleteOperation} layout='alert alert-danger p-1' />)
                        }
                    </div>
    
                </div>
            
            </div>
        </div>
    
    
    }
        
    </>
)
};

