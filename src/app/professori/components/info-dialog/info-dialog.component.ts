import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';
import { StudenteInterface } from 'src/app/interfaces/studentInterface';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoProfessoreDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProfessoreInterface){}
}
