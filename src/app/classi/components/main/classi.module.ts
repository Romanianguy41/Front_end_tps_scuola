import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ClassiComponent } from './classi.component';
import { TableClassiModule } from '../tabella-classi/tabella-classi.module';
import { ViewProfessorDialogModule } from '../classe-dialog/professor-dialog.module';
import { AddClassDialogModule } from '../add-dialog/add-dialog-module';

@NgModule({
    declarations: [
        ClassiComponent,
    ],
    exports: [ClassiComponent],
    providers: [],
    imports: [
        BrowserModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        TableClassiModule,
        ViewProfessorDialogModule,
        AddClassDialogModule
    ]
})
export class ClasseModule { }