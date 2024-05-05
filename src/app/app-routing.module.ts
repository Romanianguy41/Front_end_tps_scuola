import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentiComponent } from './studenti/components/main/studenti.component';
import { ClassiComponent } from './classi/components/main/classi.component';
import { APIComponent } from './api/component/main/api.component';
import { ProfessoriComponent } from './professori/components/main/professori.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'api', component:APIComponent},
  {path:'studenti',component:StudentiComponent},
  {path:'professori', component:ProfessoriComponent},
  {path:'classi', component:ClassiComponent},
  {path:'',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
