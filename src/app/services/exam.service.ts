import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExamService {

  url="http://26.183.146.248:8080/api/v1/admissionExams/period/2021";

  constructor(private http:HttpClient) { }

  getExams():Observable<any>{
    return this.http.get(this.url);
  }
}
