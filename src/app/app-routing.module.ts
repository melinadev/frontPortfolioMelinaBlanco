import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillsComponent } from './components/hys/edit-skills.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // si es /login rutea al login
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaeducacion', component: NeweducacionComponent},
  {path: 'editeducacion/:id', component: EditeducacionComponent},
  {path: 'editskills/:id', component: EditSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
