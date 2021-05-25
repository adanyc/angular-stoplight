import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoplightComponent } from './stoplight/stoplight.component';

const routes: Routes = [
  { path: '', redirectTo: '/stoplight', pathMatch: 'full' },
  { path: 'stoplight', component: StoplightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
