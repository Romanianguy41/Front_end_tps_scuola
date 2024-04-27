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
onFormSubmit() {
  console.log("premuto")
  let data = this.formDati.value
  console.log(data)
  this.clearData(data)

}
  formDati: FormGroup;
  @Output() stringEvent = new EventEmitter<string>();
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
      console.log(data)
      console.log(data.classe);
      (data.classe)
        data.classe = data.classe.trim().toLowerCase();
      console.log(data.classe);
      if(data.nome)
        data.nome = data.nome.trim().toLowerCase();
      if(data.cognome)
        data.cognome = data.cognome.trim().toLowerCase();
      if(data.email)
        data.email = data.email.trim().toLowerCase();
      if(data.sezione)
        data.sezione = data.sezione.trim().toLowerCase();
      this.createClasseSezioneString(data);
    }

    createClasseSezioneString(data:StudenteFilterInterface){
      console.log("dentro");
      let localSearch = new String();
      if(data.classe != ''){
        localSearch = localSearch + "classe:"+data.classe;
      }
      if(data.sezione != ''){
        console.log(data);
        if(localSearch != ''){
          localSearch = localSearch +";"
        }
        localSearch = localSearch + "sezione:'"+data.sezione+"'";
      }

      if(localSearch === '')
        return;
      this.classeService.getclassiFiltered(localSearch.toString()).subscribe((value)=>{
        console.log(value);
        let classSearch =""

        if(value.length>0){
          classSearch = "rifClasse in (";
          for(let i = 0; i < value.length; i++){
            classSearch = classSearch + value[i].idClasse.toString()
            if (i < value.length-1){
              classSearch = classSearch + ",";
            }
          }
        classSearch =classSearch + ")";
      }

        this.createFullSearchString(data);
        console.log("classSearch")
        console.log(classSearch);
        console.log("searchString")
        console.log(this.searchString);

        let finalString =""
        if(classSearch !== "")
          finalString = classSearch

        if(this.searchString !== "" && classSearch !== "")
          finalString = finalString+";"

        if(this.searchString !== "")
          finalString = finalString+this.searchString

        console.log(finalString);

        this.studentService.getStudentiFiltered(finalString).subscribe((resp)=>{
          console.log(resp)
        })

      })
    }

    createFullSearchString(data:StudenteFilterInterface){
      this.searchString = '';
      if(data.cognome != ''){
        this.searchString = this.searchString + "cognome:'"+data.cognome+"'";
      }
      if(data.nome != ''){
        if(this.searchString != ''){
          this.searchString = this.searchString +";"
        }
        this.searchString = this.searchString + "nome:'"+data.nome+"'";
      }
      if(data.email != ''){
        if(this.searchString != ''){
          this.searchString = this.searchString +";"
        }
        this.searchString = this.searchString + "email:'"+data.email+"'";
      }
      if(data.codiceFiscale != ''){
        if(this.searchString != ''){
          this.searchString = this.searchString +";"
        }
        this.searchString = this.searchString + "codFiscale:'"+data.codiceFiscale+"'";
      }
    }


  }

