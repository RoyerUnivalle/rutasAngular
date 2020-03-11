import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Catalogo1Component } from './catalogo/catalogo1/catalogo1.component';
import { Catalogo2Component } from './catalogo/catalogo2/catalogo2.component';


// const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: 'childs', pathMatch: 'full' },
  {
    path: 'catalogo1',
    component: Catalogo1Component,
    data: {
      title: 'catalogo1'
    }
  },
  {
    path: 'catalogo2',
    component: Catalogo2Component,
    data: {
      title: 'catalogo2'
    }
  },
  { path: 'childs', loadChildren: './child2/child2.module#Child2Module' },

];

/*const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
    children: [
        { path: '', redirectTo: 'catalogo1', pathMatch: 'prefix' },
        { path: 'catalogo1', component: Catalogo1Component },
        { path: 'catalogo2', component: Catalogo2Component },
    ]
},
{ path: 'childs', loadChildren: './child2/child2.module#Child2Module' },

];*/


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
