import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function codiceFiscaleValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const codiceFiscale = control.value;
    if (!codiceFiscale) {
      return null;
    }

    const regex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
    if (!regex.test(codiceFiscale)) {
      return { 'invalidCodiceFiscale': true }; 
    }

    
    return null;
  };
}
