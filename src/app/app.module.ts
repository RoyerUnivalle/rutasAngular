import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Catalogo1Component } from './catalogo/catalogo1/catalogo1.component';
import { Catalogo2Component } from './catalogo/catalogo2/catalogo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Catalogo1Component,
    Catalogo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
