
export const getEntryOperations = async (token, id) => {

    const resp = await fetch(`https://budget-apirest.herokuapp.com/api/operations/entries/${id}`, {
        mode: 'cors',
        headers: {'user-token': token}
    });
    const data = await resp.json();
    
    return data;
};

export const getExpensesOperations = async (token, id) => {

    const resp = await fetch(`https://budget-apirest.herokuapp.com/api/operations/expenses/${id}`, {
        mode: 'cors',
        headers: {'user-token': token}
    });
    const data = await resp.json();
    
    return data;
};


export const postOperation = (token, data) => {

    fetch('https://budget-apirest.herokuapp.com/api/operations', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { 'user-token': token,'Content-Type': 'application/json' }
    })
};

export const deleteOperation = (token, id) => {
    console.log('id en delete', id)
    fetch(`https://budget-apirest.herokuapp.com/api/operations/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {'user-token': token} 
    })
};

export const modifyOperation = (token, id, data) => {

    fetch(`https://budget-apirest.herokuapp.com/api/operations/${id}`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { 'user-token': token, 'Content-Type': 'application/json'}
    })
};

export const registerUser = (data) => {

    fetch('https://budget-apirest.herokuapp.com/api/users/register', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })

};

export const loginUser = async (user) => {

    const resp = await fetch('https://budget-apirest.herokuapp.com/api/users/login', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' } });
    const data = await resp.json();

    return data;

}; 