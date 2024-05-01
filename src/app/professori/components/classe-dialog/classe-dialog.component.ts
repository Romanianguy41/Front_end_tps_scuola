import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClasseService } from 'src/app/classi/service/classe.service';
import { ClasseInterface } from 'src/app/interfaces/classeInterface';
import { StudenteInterface } from 'src/app/interfaces/studentInterface';
import { ProfessoriService } from '../../service/professori-service.service';
import { InsegnaService } from 'src/app/insegna/service/insegna.service';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';
import { InsegnaInterface } from 'src/app/interfaces/insegnaInterface';
import { AddDialogComponent } from 'src/app/studenti/components/add-dialog/add-dialog.component';
import { AddClassProfessorDialogComponent } from '../add-class-professor-dialog/add-class-professor-dialog.component';

@Component({
  selector: 'classe-dialog-class',
  templateUrl: './classe-dialog.component.html',
  styleUrls: ['./classe-dialog.component.scss']
})
export class ClasseDialogComponent implements OnInit{

  displayedColumns: string[] = ["classe","sezione","materia","action"];
  dataSource!: MatTableDataSource<InsegnaInterface>;

  @Output() addClassEvent = new EventEmitter<ProfessoreInterface>

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog,
    private insegnaService: InsegnaService,
    @Inject(MAT_DIALOG_DATA) public data: ProfessoreInterface,
    public dialogRef: MatDialogRef<ClasseDialogComponent>
  ){
  }

  ngOnInit(): void {
    this.getInsegna();
    
  }

  getInsegna(){
    const searchString = "rifProfessore:"+this.data.idProfessore
    this.insegnaService.getInsegnaFiltered(searchString).subscribe((value)=>{
      this.dataSource = new MatTableDataSource<InsegnaInterface>(value);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  removeClass(insegna:InsegnaInterface):void{
    this.insegnaService.deleteInsegna(insegna.idInsegna.toString()).subscribe();
    this.dialogRef.close();
  }

  addClass(){
    console.log("rizzo")
    let dialogRef = this.dialog.open(AddClassProfessorDialogComponent);
    dialogRef.afterClosed().subscribe()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: InsegnaInterface, filter: string) => {
      const classeAsString = data.classe.classe?.toString().toLowerCase();
      const sezione = data.classe.sezione?.toLowerCase();
      const materia = data.materia.toLowerCase();
      if (classeAsString && sezione) {
        if(classeAsString.includes(filter)){
          console.log(classeAsString.includes(filter))
          console.log(classeAsString)
          return true
        }
        if(sezione.includes(filter) ||  materia.includes(filter))
          return true
      }
      return false;
    };
    this.dataSource.filter = filterValue;
  }
  
  


}
