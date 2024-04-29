import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { APIComponent } from './api.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    declarations: [
        APIComponent,
    ],
    exports: [APIComponent],
    providers: [],
    imports: [
        BrowserModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatIconModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatExpansionModule
    ]
})
export class APIModule { }
