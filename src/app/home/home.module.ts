import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
    declarations: [
        HomeComponent,
    ],
    exports: [HomeComponent],
    providers: [],
    imports: [
        BrowserModule,
        MatListModule
    ]
})
export class HomeModule { }
