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
    console.log(data);
    let insegnaSerializable ={classe:data.classe.idClasse, 
      professore:data.professore.idProfessore, materia:data.materia}
    console.log(insegnaSerializable.toString())
    return this.http.post<InsegnaInterface>(this.host+"insegna",data);
  }

  getInsegna():Observable<InsegnaInterface[]>{
    return this.http.get<InsegnaInterface[]>(this.host+"insegna");
  }

  getInsegnaFiltered(search:string):Observable<InsegnaInterface[]>{
    console.log("EHIi")
    console.log(search)
    return this.http.get<InsegnaInterface[]>(this.host+"insegna/filter?search="+search);
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
