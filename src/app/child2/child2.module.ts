import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Child2RoutingModule } from './child2-routing.module';
import { Boy1Component } from './hijos/boy1/boy1.component';
import { Boy2Component } from './hijos/boy2/boy2.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [Boy1Component, Boy2Component, Child2Component],
  imports: [
    CommonModule,
    Child2RoutingModule
  ]
})
export class Child2Module { }
