import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentiComponent } from './studenti/components/main/studenti.component';
import { AppComponent } from './app.component';
import { ProfessoriComponent } from './professori/professori/professori.component';
import { ClassiComponent } from './classi/components/main/classi.component';

const routes: Routes = [
  {path:'studenti',component:StudentiComponent},
  {path:'professori', component:ProfessoriComponent},
  {path:'classi', component:ClassiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
