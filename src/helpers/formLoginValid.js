import Swal from 'sweetalert2';

export const formLoginValid = (form) => {

    if(form.username.trim().length === 0) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Username is required'
      })
        return false;

    } else if (form.email.trim().length === 0 ){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email is required'
      })
        return false;

    } else if (form.password.trim().length === 0 ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Password is required'
      })
        return false;
    }

    return true;

};