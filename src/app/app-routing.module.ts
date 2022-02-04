import { TratoresComponent } from './tratores/tratores/tratores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'tratores'},
  {
    path: 'tratores',
    loadChildren:() => import('./tratores/tratores.module').then(m => m.TratoresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
