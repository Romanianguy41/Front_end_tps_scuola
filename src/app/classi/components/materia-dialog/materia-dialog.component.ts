import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';
import { Professore } from 'src/app/models/professore';

@Component({
  selector: 'app-materia-dialog',
  templateUrl: './materia-dialog.component.html',
  styleUrls: ['./materia-dialog.component.scss']
})
export class MateriaDialogComponent {
  formDati: FormGroup;
  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<MateriaDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ProfessoreInterface) {
    this.formDati = this.formBuilder.group({
      materia: [ '', Validators.required]
    });
  }

  onFormSubmit() {
    if(this.formDati.valid){
      let insegnaInterface = { materia:this.formDati.value.materia, 
        professore:{idProfessore:this.data.idProfessore}, classe:{idClasse:undefined}};
      this.dialogRef.close(insegnaInterface);
    }
  }
}
