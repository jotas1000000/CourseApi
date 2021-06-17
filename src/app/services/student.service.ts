import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url= 'http://localhost:49872/api/estudiantes/';
  constructor(private http: HttpClient) { }

  getEstudiantes():Observable<any>{
    return this.http.get(this.url);
  }

  getEstudiante(ci?:string):Observable<any>{
    return this.http.get(this.url+ci);
  }

  deleteEstudiante(ci?:number):Observable<any>{
    return this.http.delete(this.url+ci);
  }

  updateEstudiante(ci?:string, student?:Student):Observable<any>{
    return this.http.put(this.url+ci, student);
  }

  createEstudiante(student?:Student):Observable<any>{
    return this.http.post(this.url, student);
  }

}
