import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClasseService } from 'src/app/classi/service/classe.service';
import { StudenteFilterInterface } from 'src/app/interfaces/filterInterface/studentFilterInterface';

import { ProfessoriService } from '../../service/professori-service.service';
import { ProfessoreFilterInterface } from 'src/app/interfaces/filterInterface/professoreFilterInterface';
import { InsegnaService } from 'src/app/insegna/service/insegna.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

   searchString!: string
   @Output()finalString = new EventEmitter<string>();
  onFormSubmit() {
  let data = this.formDati.value
  this.clearData(data)
  this.createClasseSezioneString(data);

}
  formDati: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private classeService: ClasseService,
    private professoreService: ProfessoriService,
    private insegnaService: InsegnaService
  ) {
    this.formDati = this.formBuilder.group({
      nome: '',
      cognome: '',
      codiceFiscale: '',
      email: '',
      classe: '',
      sezione: '',
      materia:''

    })}
  

    clearData(data:any){
      if(data.classe)
        data.classe = data.classe.trim().toLowerCase();
      if(data.nome)
        data.nome = data.nome.trim().toLowerCase();
      if(data.cognome)
        data.cognome = data.cognome.trim().toLowerCase();
      if(data.email)
        data.email = data.email.trim().toLowerCase();
      if(data.sezione)
        data.sezione = data.sezione.trim().toLowerCase();
      if(data.materia)
        data.materia = data.materia.trim().toLowerCase();
    }

    createClasseSezioneString(data:ProfessoreFilterInterface){
      let localSearch = new String();
      if(data.classe !== '' && data.classe !== null){
        localSearch = localSearch + "classe:"+data.classe;
      }
      if(data.sezione !== '' && data.sezione !== null){
        if(localSearch != ''){
          localSearch = localSearch +";"
        }
        localSearch = localSearch + "sezione:'"+data.sezione+"'";
      }

      if(localSearch.toString() === ''){
        this.getMateriaFiltred('',data);
       
      }
      else{
        this.classeService.getClassiFiltered(localSearch.toString()).subscribe((value)=>{

          let classSearch =""
  
          if(value.length>0){
            classSearch = "$";
            for(let i = 0; i < value.length; i++){
              classSearch = classSearch +"rifClasse: "+value[i].idClasse.toString();
              if (i < value.length-1){
                classSearch = classSearch + ",";
              }
            }
          classSearch =classSearch + "$";
          }
          else{
            classSearch = classSearch +"rifClasse: -1";
          }

          this.getMateriaFiltred(classSearch,data)
          
        })
      }
      
    }

    createReturnString(classSearch:string):string{
      let finalString =""
      
      if(classSearch !== "")
        finalString = classSearch

      if(this.searchString !== "" && classSearch !== "")
        finalString = finalString+";"

      if(this.searchString !== "")
        finalString = finalString+this.searchString
      return finalString
    }

    createFullSearchString(data:ProfessoreFilterInterface){
      this.searchString = '';
      if(data.cognome !== '' && data.cognome !== null){
        this.searchString = this.searchString + "cognome:'"+data.cognome+"'";
      }
      if(data.nome !== '' && data.nome !== null){
        if(this.searchString !== ''){
          this.searchString = this.searchString +";"
        }
        this.searchString = this.searchString + "nome:'"+data.nome+"'";
      }
      if(data.email !== '' && data.email !== null){
        if(this.searchString !== ''){
          this.searchString = this.searchString +";"
        }
        this.searchString = this.searchString + "email:'"+data.email+"'";
      }
      if(data.codiceFiscale !=='' && data.codiceFiscale !== null){
        if(this.searchString !== ''){
          this.searchString = this.searchString +";"
        }
        this.searchString = this.searchString + "codFiscale:'"+data.codiceFiscale+"'";
      }
    }

    getMateriaFiltred(classi:String, data:ProfessoreFilterInterface){
      let insegnaSearch = "";
      if(data.materia !== '' && data.materia !== null){
          insegnaSearch = "materia:'" + data.materia+"'";
      }
      if(classi!=='' && classi!==null && classi !== "-1"){
        insegnaSearch = ";"+insegnaSearch
        insegnaSearch = classi + insegnaSearch;
      }
      console.log(insegnaSearch);
      this.insegnaService.getInsegnaFiltered(insegnaSearch).subscribe((value)=>{
        console.log("insegna")
        console.log(value)
        let professoreSearch =""
  
          if(value.length>0){
            professoreSearch = "$";
            for(let i = 0; i < value.length; i++){
              professoreSearch = professoreSearch +"idProfessore: "+value[i].professore.idProfessore?.toString();
              if (i < value.length-1){
                professoreSearch = professoreSearch + ",";
              }
            }
          professoreSearch =professoreSearch + "$";
          }
          else{
            professoreSearch = professoreSearch +"idProfessore: -1";
          }
          this.createFullSearchString(data);

          this.finalString.next(this.createReturnString(professoreSearch));
      })
    }

    clearFilter() {
      this.finalString.next('');
    }


  }

