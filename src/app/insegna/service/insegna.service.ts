import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InsegnaInterface } from '../../interfaces/insegnaInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsegnaService {

  host = "http://localhost:8080/scuola/webapi/"
  constructor(private http: HttpClient) { }
  
  createInsegna(data:InsegnaInterface):Observable<InsegnaInterface>{
    let insegna = JSON.stringify(data).toString();
    console.log("per il bro")
    console.log(insegna);
    return this.http.post<InsegnaInterface>(this.host+"insegna",insegna);
  }

  getInsegna():Observable<InsegnaInterface[]>{
    return this.http.get<InsegnaInterface[]>(this.host+"insegna");
  }

  getInsegnaFiltered(search:string):Observable<InsegnaInterface[]>{
    return this.http.get<InsegnaInterface[]>(this.host+"insegna/filter/?search="+search);
  }
  
  deleteInsegna(idinsegna:string):Observable<InsegnaInterface>{
    return this.http.delete<InsegnaInterface>(this.host+"insegna/"+idinsegna);
  }

  updateInsegna(data:InsegnaInterface):Observable<InsegnaInterface>{
    let insegna = JSON.stringify(data).toString();
    console.log(insegna);
    return this.http.put<InsegnaInterface>(this.host+"insegna",insegna);
  }
}
