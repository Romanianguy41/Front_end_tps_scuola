import { AbstractControl, ValidatorFn } from '@angular/forms';

export function capValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cap = control.value;
    if (!cap) {
      return null;
    }

    const regex = /^[0-9]+$/;
    if (!regex.test(cap)) {
      return { 'invalidCap': true }; 
    }

    return null; 
  };
}
