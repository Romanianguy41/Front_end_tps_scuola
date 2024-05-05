import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmailErrorStateMatcher } from 'src/app/classes/emailError'



@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddClassDialogComponent implements OnInit {

  @Output() createEvent = new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();

  @Input()type!:string

  matcher = new EmailErrorStateMatcher();

  formDati: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.formDati = this.formBuilder.group({
      classe: ['',Validators.required],
      sezione: ['',Validators.required],
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