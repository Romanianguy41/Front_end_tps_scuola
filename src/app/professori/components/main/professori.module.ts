import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProfessoriComponent } from './professori.component';
import { TableProfessoriModule } from '../table/table.module';
import { ProfessorInfoDialogModule } from '../info-dialog/info-dialog.module';

import { FilterModule } from '../filter/add-dialog-module';

@NgModule({
    declarations: [
        ProfessoriComponent,
    ],
    exports: [ProfessoriComponent],
    providers: [],
    imports: [
        BrowserModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        TableProfessoriModule,
        ProfessorInfoDialogModule,
        FilterModule
    ]
})
export class ProfessoriModule { }
