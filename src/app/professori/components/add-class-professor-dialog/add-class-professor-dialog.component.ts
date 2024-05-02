import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InsegnaService } from 'src/app/insegna/service/insegna.service';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';
import { ClasseDialogComponent } from '../classe-dialog/classe-dialog.component';
import { InsegnaInterface } from 'src/app/interfaces/insegnaInterface';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-class-professor-dialog',
  templateUrl: './add-class-professor-dialog.component.html',
  styleUrls: ['./add-class-professor-dialog.component.scss']
})
export class AddClassProfessorDialogComponent  implements OnInit{
  constructor(private dialog: MatDialog,
    private insegnaService: InsegnaService,
    @Inject(MAT_DIALOG_DATA) public data: InsegnaInterface[],
    public dialogRef: MatDialogRef<AddClassProfessorDialogComponent>
  ){
  }
  classi: any[] =[];
  ngOnInit(): void {
    this.getClasses()
  }
  getClasses(){
    this.insegnaService.getInsegna().subscribe((value)=>{
      value.sort((a, b) => {
        // First, compare by 'classe'
        if (a.classe.classe !== b.classe.classe) {
            return a?.classe?.classe - b?.classe?.classe;
        }
        // If 'classe' is the same, compare by 'sezione'
        return a.classe.sezione.localeCompare(b.classe.sezione);
    });
      value.forEach((element)=>{
        let viewValue=element.classe.classe?.toString()
        if(viewValue)
          viewValue = viewValue + element.classe.sezione;
        this.classi.push({value: element, viewValue:viewValue})
      })

    })
    /*this.data.forEach((element) => {
      let classe = '';
      console.log(element.classe.classe?.toString());
      console.log(element.classe.sezione);
      //classe = element.classe.classe?.toString() + element.classe.sezione; 
      //this.classi.add({value:element ,viewValue:});
    });*/
  }
   foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
