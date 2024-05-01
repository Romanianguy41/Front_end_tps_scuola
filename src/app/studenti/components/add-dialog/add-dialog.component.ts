import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudenteInterface } from 'src/app/interfaces/studentInterface';
import { EmailErrorStateMatcher } from 'src/app/classes/emailError'
import { codiceFiscaleValidator } from 'src/app/classes/codiceFiscaleError';
import { telefonoValidator } from 'src/app/classes/telefonoError';
import { dataFuturaValidator } from 'src/app/classes/dataError';
import { capValidator } from 'src/app/classes/capError';


@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  @Output() createEvent = new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();

  emailFormControl!:FormControl
  codiceFiscaleControl!: FormControl
  telefonoControl!: FormControl
  dataControl!: FormControl
  CAPControl!: FormControl
  @Input()type!:string

  matcher = new EmailErrorStateMatcher();

  formDati: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log("dialog")
      console.log(data)
    this.emailFormControl = new FormControl(data?.email, [Validators.required, Validators.email]);
    this.codiceFiscaleControl = new FormControl(data?.codiceFiscale,[Validators.required, codiceFiscaleValidator()])
    this.telefonoControl = new FormControl(data?.telefono,[Validators.required, telefonoValidator()])
    this.dataControl = new FormControl(data?.dataNascita,[Validators.required,dataFuturaValidator()])
    this.CAPControl = new FormControl(data?.CAP,[Validators.required, capValidator()])

    this.formDati = this.formBuilder.group({
      nome: ['',Validators.required],
      cognome: ['',Validators.required],
      codiceFiscale: this.codiceFiscaleControl,
      dataNascita: this.dataControl,
      luogoNascita: '',
      email: this.emailFormControl,
      telefono: this.telefonoControl,
      indirizzo: ['',Validators.required],
      CAP: this.CAPControl,
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