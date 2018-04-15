import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class GeruService {

  API_URL = '../assets/expedidores.json'

  constructor(private http: HttpClient) { }

  emissor(): Observable<any>{
    return this.http.get(`${this.API_URL}`)
  }

}
