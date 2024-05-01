import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudenteInterface } from 'src/app/interfaces/studentInterface';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {

  host = "http://localhost:8080/scuola/webapi/"
  constructor(private http: HttpClient) { }
  
  createStudente(data:StudenteInterface):Observable<StudenteInterface>{
    let studente = JSON.stringify(data).toString();
    console.log("per il bro")
    console.log(studente);
    return this.http.post<StudenteInterface>(this.host+"studente",studente);
  }

  getStudenti():Observable<StudenteInterface[]>{
    return this.http.get<StudenteInterface[]>(this.host+"studente");
  }

  getStudentiFiltered(search:string):Observable<StudenteInterface[]>{
    return this.http.get<StudenteInterface[]>(this.host+"studente/filter?search="+search);
  }
  
  deleteStudente(idStudente:string):Observable<StudenteInterface>{
    return this.http.delete<StudenteInterface>(this.host+"studente/"+idStudente);
  }

  updateStudente(data:StudenteInterface):Observable<StudenteInterface>{
    let studente = JSON.stringify(data).toString();
    console.log(studente);
    return this.http.put<StudenteInterface>(this.host+"studente",studente);
  }

  removeClasseStudente(idStudente:string):Observable<StudenteInterface>{
    console.log(idStudente);
    console.log(this.host+"studente/classe/"+idStudente);
    return this.http.put<StudenteInterface>(this.host+"studente/classe/"+idStudente,null);
  }

}
