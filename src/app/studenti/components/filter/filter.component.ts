import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClasseService } from 'src/app/classi/service/classe.service';
import { StudenteFilterInterface } from 'src/app/interfaces/filterInterface/studentFilterInterface';
import { StudenteService } from '../../service/studenteService';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

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
    private studentService: StudenteService
  ) {
    this.formDati = this.formBuilder.group({
      nome: '',
      cognome: '',
      codiceFiscale: '',
      email: '',
      classe: '',
      sezione: '',

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
    }

    createClasseSezioneString(data:StudenteFilterInterface){
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
        this.createFullSearchString(data)
        this.finalString.next(this.searchString);
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

          this.createFullSearchString(data);
          this.finalString.next(this.createReturnString(classSearch));
          
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

    createFullSearchString(data:StudenteFilterInterface){
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

    clearFilter() {
      this.finalString.next('');
    }


  }

