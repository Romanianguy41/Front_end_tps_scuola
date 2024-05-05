import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentiComponent } from './studenti.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDialogModule } from '../add-dialog/add-dialog-module';
import { TableModule } from '../table/table.module';
import { InfoDialogModule } from '../info-dialog/info-dialog.module';
import { AddClassDialogModule } from '../add-class-dialog/add-class-dialog.module';
import { FilterModule } from '../filter/add-dialog-module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        StudentiComponent,
    ],
    exports: [StudentiComponent],
    providers: [],
    imports: [
        BrowserModule,
        MatButtonModule,
        MatDialogModule,
        AddDialogModule,
        AddDialogModule,
        InfoDialogModule,
        AddClassDialogModule,
        TableModule,
        FilterModule,
        InfoDialogModule,
        MatSnackBarModule
    ]
})
export class StudentiModule { }
