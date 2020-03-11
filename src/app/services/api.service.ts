import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any> {
    return this.httpClient.get<any>('https://invessoft.com/api/eventos/1');
  }
}
