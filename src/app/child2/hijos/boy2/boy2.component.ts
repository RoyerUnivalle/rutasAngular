import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'; // IMPORTAR
import { Trabajo, Agenda } from '../../../models/trabajo'; // IMPORTAR

@Component({
  selector: 'app-boy2',
  templateUrl: './boy2.component.html',
  styleUrls: ['./boy2.component.sass']
})
export class Boy2Component implements OnInit, AfterViewInit {

  public data: Array<Trabajo>;


  constructor(private apiService: ApiService) {
    console.log('constructor');
    this.getData();
   } // INSTANCIAR

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  public getData() {
    this.apiService.getData() // UTILIZANDO
    .subscribe(res => {
      this.data = res.agenda;
      console.log('exito');
      console.log(this.data);
      },
      error => {
        console.log('fallo');
      });
      ///
  }

}
