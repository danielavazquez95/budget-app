import Swal from 'sweetalert2';

export const isFormValid = (form) => {

    if(form.username.trim().length === 0) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Username is required'
      })
        return false;

    } else if (form.email === 0 ){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email is required'
      })
        return false;

    } else if (form.password.length === 0 ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Password is required'
      })
        return false;

    } else if (form.password2.length === 0 || form.password2 !== form.password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Password is incorrect'
      })
        return false;
    }; 

    return true;

};