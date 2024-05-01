import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-class-professor-dialog',
  templateUrl: './add-class-professor-dialog.component.html',
  styleUrls: ['./add-class-professor-dialog.component.scss']
})
export class AddClassProfessorDialogComponent {
   foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
