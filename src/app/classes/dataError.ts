import { AbstractControl, ValidatorFn } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

export function dataFuturaValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const selectedDate: Date = control.value;

    if (!selectedDate) {
      return null; 
    }

    const oggi = new Date();
    oggi.setHours(0, 0, 0, 0);

    if (selectedDate > oggi) {
      return { 'dataFutura': true }; 
    }

    return null; 
  };
}
