
export const getEntryOperations = async (token, id) => {

    const resp = await fetch(`https://budget-apirest.herokuapp.com/api/operations/entries/${id}`, {
        headers: {'user-token': token}
    });
    const data = await resp.json();
    
    return data;
};

export const getExpensesOperations = async (token, id) => {

    const resp = await fetch(`https://budget-apirest.herokuapp.com/api/operations/expenses/${id}`, {
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
    .then(response => response.json())
    .then(data => console.log(data))
};

export const deleteOperation = (token, id) => {

    fetch(`https://budget-apirest.herokuapp.com/api/operations/${id}`, {
        method: 'DELETE',
        headers: {'user-token': token} 
    })
    .then(response => response.json())
    .then(data => console.log(data))
};

export const modifyOperation = (token, id, data) => {

    fetch(`https://budget-apirest.herokuapp.com/api/operations/${id}`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { 'user-token': token, 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => console.log(data))
};

export const registerUser = (data) => {

    fetch('https://budget-apirest.herokuapp.com/api/users/register', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => console.log(data))

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