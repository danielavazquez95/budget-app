import Swal from 'sweetalert2';

export const isFormValid = (form) => {

    if(form.concept.trim().length === 0) {
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Concept is required'
      })
        return false;

    } else if (form.price === null ){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Price is required'
      })
        return false;

    } else if (form.date.length === 0 ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Date is required'
      })
        return false;

    } else if (form.type === 'Click to select') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Type is required'
      })
        return false;
    }; 

    return true;

};