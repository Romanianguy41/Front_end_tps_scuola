import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';

@Injectable({
  providedIn: 'root'
})
export class ProfessoriService {
  host = "http://localhost:8080/scuola/webapi/"
  constructor(private http: HttpClient) { }
  
  createProfessore(data:ProfessoreInterface):Observable<ProfessoreInterface>{
    let professore = JSON.stringify(data).toString();
    console.log("per il bro")
    console.log(professore);
    return this.http.post<ProfessoreInterface>(this.host+"professore",professore);
  }

  getProfessori():Observable<ProfessoreInterface[]>{
    return this.http.get<ProfessoreInterface[]>(this.host+"professore");
  }

  getProfessoriFiltered(search:string):Observable<ProfessoreInterface[]>{
    return this.http.get<ProfessoreInterface[]>(this.host+"professore/filter?search="+search);
  }
  
  deleteProfessore(idProfessore:string):Observable<ProfessoreInterface>{
    return this.http.delete<ProfessoreInterface>(this.host+"professore/"+idProfessore);
  }

  updateProfessore(data:ProfessoreInterface):Observable<ProfessoreInterface>{
    let professore = JSON.stringify(data).toString();
    console.log(professore);
    return this.http.put<ProfessoreInterface>(this.host+"professore",professore);
  }
}
