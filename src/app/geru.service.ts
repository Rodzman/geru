import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { User } from './geru.model';
import 'rxjs/add/operator/map'


@Injectable()
export class GeruService {

  EMISSORES_URL = '../assets/expedidores.json';
  ENDPOINT = 'http://5ad4038b33667e001462443f.mockapi.io/api/v1/users';
  
  private headers = new HttpHeaders  ({"Content-Type": "application/x-www-form-urlencoded"})
  params = new HttpParams()

  constructor(private http: HttpClient) { }

  emissor(): Observable<any>{
    return this.http.get(`${this.EMISSORES_URL}`)
  }

  addUser(user:User): Observable<User>{
    return this.http.post<User>(`${this.ENDPOINT}`, user)
      .map(user => user.id)
  }

  editUser(id:number, info:User): Observable<User>{
    return this.http.put<User>(`${this.ENDPOINT}/${id}`, info)
  }

  deleteUser(id:number): Observable<User>{
    if(confirm("Você tem certeza?")){
      return this.http.delete<User>(`${this.ENDPOINT}/${id}`)
    }
  }

  listUsers(): Observable<User>{
    return this.http.get<User>(`${this.ENDPOINT}`)
  }

  userById(id:number): Observable<User>{
    return this.http.get<User>(`${this.ENDPOINT}/${id}`)
  }

}
