import { AbstractControl, ValidatorFn } from '@angular/forms';

export function telefonoValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const telefono = control.value;
    if (!telefono) {
      return null; 
    }

    const regex = /^[0-9\s\+]+$/;
    if (!regex.test(telefono)) {
      return { 'invalidTelefono': true }; 
    }

    return null; 
  };
}