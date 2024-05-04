import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InsegnaInterface } from 'src/app/interfaces/insegnaInterface';
import { ClasseService } from 'src/app/classi/service/classe.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';

@Component({
  selector: 'app-add-class-professor-dialog',
  templateUrl: './add-class-professor-dialog.component.html',
  styleUrls: ['./add-class-professor-dialog.component.scss']
})
export class AddClassProfessorDialogComponent implements OnInit {
  formDati: FormGroup;

  constructor(
    private dialog: MatDialog,
    private classeService: ClasseService,
    public dialogRef: MatDialogRef<AddClassProfessorDialogComponent>,
    private formBuilder: FormBuilder
  ) {
    this.formDati = this.formBuilder.group({
      classe: ['', Validators.required],
      materia: [ '', Validators.required],
    });
  }

  classi: any[] = [];

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses() {
    this.classeService.getClassi().subscribe((value) => {
      value.sort((a, b) => {
        if (a.classe != undefined && b.classe != undefined) {
          if (a.classe !== b.classe) {
            return a.classe - b.classe;
          }
        }
        if (a.sezione != undefined && b.sezione != undefined) {
          return a.sezione.localeCompare(b.sezione);
        }
        return -1;
      });
      value.forEach((element) => {
        let viewValue = element.classe?.toString();
        if (viewValue) viewValue = viewValue + element.sezione;
        this.classi.push({ value: element, viewValue: viewValue });
      });
    });
  }

  onFormSubmit() {
    if(this.formDati.valid){
      let insegnaInterface = {classe:this.formDati.value.classe,
        materia:this.formDati.value.materia
      };
      this.dialogRef.close(insegnaInterface);
    }
  }
}