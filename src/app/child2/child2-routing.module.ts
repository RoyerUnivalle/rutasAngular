import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child2Component } from './child2/child2.component';
import { Boy1Component } from './hijos/boy1/boy1.component';
import { Boy2Component } from './hijos/boy2/boy2.component';


const routes: Routes = [
  {
    path: '',
    component: Child2Component,
    children: [
        { path: '', redirectTo: 'boy1', pathMatch: 'prefix' },
        { path: 'boy1', component: Boy1Component },
        { path: 'boy2', component: Boy2Component },
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child2RoutingModule { }
