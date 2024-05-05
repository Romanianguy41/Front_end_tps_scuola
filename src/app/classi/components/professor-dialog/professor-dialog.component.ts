import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClasseService } from 'src/app/classi/service/classe.service';
import { ClasseInterface } from 'src/app/interfaces/classeInterface';
import { StudenteInterface } from 'src/app/interfaces/studentInterface';
import { InsegnaService } from 'src/app/insegna/service/insegna.service';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';
import { InsegnaInterface } from 'src/app/interfaces/insegnaInterface';
import { Professore } from 'src/app/models/professore';
import { AddProfessorDialogComponent } from '../add-professor/add-professor.component';

@Component({
  selector: 'professor-dialog-class',
  templateUrl: './professor-dialog.component.html',
  styleUrls: ['./professor-dialog.component.scss']
})
export class ViewProfessorDialogComponent implements OnInit{

  displayedColumns: string[] = ["cognome","nome","materia","action"];
  dataSource!: MatTableDataSource<InsegnaInterface>;

  @Output() addClassEvent = new EventEmitter<ProfessoreInterface>

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog,
    private insegnaService: InsegnaService,
    @Inject(MAT_DIALOG_DATA) public data: ClasseInterface,
    public dialogRef: MatDialogRef<ViewProfessorDialogComponent>
  ){}

  ngOnInit(): void {
    this.getInsegna();
    
  }

  getInsegna(){
    const searchString = "rifClasse:"+this.data.idClasse
    this.insegnaService.getInsegnaFiltered(searchString).subscribe((value)=>{
      this.dataSource = new MatTableDataSource<InsegnaInterface>(value);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  removeProfessor(insegna:InsegnaInterface):void{
    this.insegnaService.deleteInsegna(insegna.idInsegna.toString()).subscribe();
    this.dialogRef.close();
  }
  
  addProfessor(){
    let dialogRef = this.dialog.open(AddProfessorDialogComponent,{data:this.data});
    dialogRef.afterClosed().subscribe((value:InsegnaInterface)=>{
      this.getInsegna();
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: InsegnaInterface, filter: string) => {
      const cognome = data.professore.cognome?.toLowerCase();
      const nome = data.professore.nome?.toLowerCase();
      const materia = data.materia.toLowerCase();
      if (cognome && nome) {
        if(cognome.includes(filter)){
          return true
        }
        if(nome.includes(filter) ||  materia.includes(filter))
          return true
      }
      return false;
    };
    this.dataSource.filter = filterValue;
  }

}
