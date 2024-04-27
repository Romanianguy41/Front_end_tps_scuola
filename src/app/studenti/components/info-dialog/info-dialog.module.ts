import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoDialogComponent } from './info-dialog.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [InfoDialogComponent],
  providers: []
})
export class InfoDialogModule { }
