import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperienceListComponent} from './curriculum/experience-list/experience-list.component';
import {ExperienceFormComponent} from './curriculum/experience-form/experience-form.component';

const routes: Routes = [
  {path:'curriculo', component: ExperienceListComponent},
  {path:'', component: ExperienceFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
