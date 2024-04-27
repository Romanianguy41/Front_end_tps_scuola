import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { StudenteService } from '../../service/studenteService';
import { StudenteInterface } from 'src/app/interfaces/studentInterface';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AddClassDialogComponent } from '../add-class-dialog/add-class-dialog.component';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.scss']
})
export class StudentiComponent implements OnInit {
  constructor(private dialog: MatDialog, private studentService: StudenteService) { }
  @ViewChild("table") table!: MatTable<StudenteInterface>;
  studenti!: StudenteInterface[];
  displayedColumns: string[] = ['cognome', 'nome', 'codfiscale', 'email', 'classe', 'action'];
  dataSource!: MatTableDataSource<StudenteInterface>;

  ngOnInit(): void {
    this.getStudenti();
  }

  getStudenti() {
    this.studentService.getStudenti().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource<StudenteInterface>(res);
      },
      error: console.log,

    });
  }


  openDialog() {
    let dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        this.studentService.createStudente(val).subscribe(() => {
          this.getStudenti()
        })

      }
    });
  }

  deleteStudent(idStudente: string) {
    this.studentService.deleteStudente(idStudente).subscribe(() => {
      this.getStudenti()
    });

  }

  openEditDialog(data: StudenteInterface) {
    data.dataNascita = new Date (data.dataNascita)
    let dialogRef = this.dialog.open(AddDialogComponent, { data });
    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        val.idStudente=data.idStudente
        this.studentService.updateStudente(val).subscribe(() => {
          this.getStudenti()
        })
      }
    });
  }

  openAddClassDialog(data:StudenteInterface){
    let dialogRef = this.dialog.open(AddClassDialogComponent, { data });
    dialogRef.afterClosed().subscribe((val)=>{
      if(val) {
          val.idStudente=data.idStudente
          console.log(val);
          this.studentService.updateStudente(val).subscribe(() => {
            this.getStudenti()
          })
      }
      else if(data){
        this.studentService.removeClasseStudente(data).subscribe(() => {
          this.getStudenti()
        })
      }
    })
  } 
}
