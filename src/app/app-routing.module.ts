import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'formulario',
    loadChildren : () => import(/* webpackChunkName: "formulario"*/'./pages/form/form.module').then( (m) => m.FormModule)
  },
  { 
    path: 'animations', 
    loadChildren: () => import(/* webpackChunkName: "animaciones"*/'./pages/animations/animations.module').then(m => m.AnimationsModule)
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
