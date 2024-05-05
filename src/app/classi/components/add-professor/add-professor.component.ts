import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InsegnaService } from 'src/app/insegna/service/insegna.service';
import { InsegnaInterface } from 'src/app/interfaces/insegnaInterface';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';
import { ProfessoriService } from 'src/app/professori/service/professori-service.service';
import { MateriaDialogComponent } from '../materia-dialog/materia-dialog.component';
import { ClasseInterface } from 'src/app/interfaces/classeInterface';
import { Classe } from 'src/app/models/classe';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.scss']
})
export class AddProfessorDialogComponent implements OnInit{

  
  displayedColumns: string[] = ["cognome","nome","email","action"];
  dataSource!: MatTableDataSource<ProfessoreInterface>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private professoreService: ProfessoriService,
            private dialog: MatDialog, private insegnaService:InsegnaService,
            public dialogRef: MatDialogRef<AddProfessorDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: ClasseInterface){}

  ngOnInit(): void {
    this.professoreService.getProfessori().subscribe((value)=>{
      this.dataSource= new MatTableDataSource<ProfessoreInterface>(value);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addMateria(professor:ProfessoreInterface) {
    let dialogRef = this.dialog.open(MateriaDialogComponent,{data:professor});
    dialogRef.afterClosed().subscribe((value:InsegnaInterface)=>{
      if(value===undefined)
        return;
      value.classe.idClasse = this.data.idClasse
      console.log(value);
      this.insegnaService.createInsegna(value).subscribe((value)=>{console.log(value), this.dialogRef.close()})
      console.log(value);
    })
  }



}
