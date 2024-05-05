import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddProfessorDialogComponent } from './add-professor.component';
import { MateriaDialogComponent } from '../materia-dialog/materia-dialog.component';
import { MateriaDialogModule } from '../materia-dialog/materia-dialog.module';


@NgModule({
  declarations: [
    AddProfessorDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MateriaDialogModule
    
  ],
  exports: [AddProfessorDialogComponent],
  providers: []
})
export class  AddProfessorDialogModule{ }
