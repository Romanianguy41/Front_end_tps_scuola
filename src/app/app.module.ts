import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { StudentiModule } from './studenti/components/main/studenti.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APIModule } from './api/component/main/api.module';
import { ClasseModule } from './classi/components/main/classi.module';
import { ProfessoriModule } from './professori/components/main/professori.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    StudentiModule,
    HttpClientModule,
    MatSidenavModule,
    APIModule,
    ClasseModule,
    ProfessoriModule,
    HomeModule
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
