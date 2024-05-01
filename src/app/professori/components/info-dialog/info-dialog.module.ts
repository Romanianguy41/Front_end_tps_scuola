import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { InfoProfessoreDialogComponent } from './info-dialog.component';

@NgModule({
  declarations: [
    InfoProfessoreDialogComponent  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [InfoProfessoreDialogComponent],
  providers: []
})
export class ProfessorInfoDialogModule { }
