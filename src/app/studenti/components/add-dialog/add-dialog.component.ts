import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudenteInterface } from 'src/app/interfaces/studentInterface';
import { EmailErrorStateMatcher } from 'src/app/classes/emailError'


@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  @Output() createEvent = new EventEmitter<StudenteInterface>();
  @Output() updateEvent = new EventEmitter<StudenteInterface>();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new EmailErrorStateMatcher();

  formDati: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudenteInterface) {
    this.formDati = this.formBuilder.group({
      nome: '',
      cognome: '',
      codiceFiscale: '',
      dataNascita: '',
      luogoNascita: '',
      email: '',
      telefono: '',
      indirizzo: '',
      CAP: '',
      cittadinanza: ''

    })
  }
  ngOnInit(): void {
    this.formDati.patchValue(this.data);
  }
  onFormSubmit(): void {
    if (this.formDati.valid) {
      this.dialogRef.close(this.formDati.value);
    }
  }

}