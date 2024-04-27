import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClasseInterface } from 'src/app/interfaces/classeInterface';
@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  host = "http://localhost:8080/scuola/webapi/"
  constructor(private http: HttpClient) { }
  
  createclasse(data:ClasseInterface):Observable<ClasseInterface>{
    let classe = JSON.stringify(data).toString();
    console.log("per il bro")
    console.log(classe);
    return this.http.post<ClasseInterface>(this.host+"classe",classe);
  }

  getclassi():Observable<ClasseInterface[]>{
    return this.http.get<ClasseInterface[]>(this.host+"classe");
  }

  getclassiFiltered(search:string):Observable<ClasseInterface[]>{
    return this.http.get<ClasseInterface[]>(this.host+"classe/filter?search="+search);
  }
  
  deleteclasse(idclasse:string):Observable<ClasseInterface>{
    return this.http.delete<ClasseInterface>(this.host+"classe/"+idclasse);
  }
  updateclasse(data:ClasseInterface):Observable<ClasseInterface>{
    let classe = JSON.stringify(data).toString();
    return this.http.put<ClasseInterface>(this.host+"classe",classe);
  }
}
