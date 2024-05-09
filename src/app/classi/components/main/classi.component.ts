import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ClasseInterface } from 'src/app/interfaces/classeInterface';
import { ClasseService } from '../../service/classe.service';
import { AddClassDialogComponent } from '../add-dialog/add-dialog.component';
import { BehaviorSubject } from 'rxjs';
import { ViewProfessorDialogComponent } from '../professor-dialog/professor-dialog.component';

@Component({
  selector: 'app-classi',
  templateUrl: './classi.component.html',
  styleUrls: ['./classi.component.scss']
})
export class ClassiComponent {
  constructor(private dialog: MatDialog, private classeService: ClasseService) { }
  @ViewChild("table") table!: MatTable<ClasseInterface>;
  updateTable = new BehaviorSubject<string>('');
  classi!: ClasseInterface[];
  displayedColumns: string[] = ['classe', 'sezione', 'action'];
  dataSource!: MatTableDataSource<ClasseInterface>;

  searchString!: string;

  ngOnInit(): void {
    this.getClassi();
  }

  getClassi() {
    if(this.searchString === undefined){
    this.classeService.getClassi().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource<ClasseInterface>(res);
        this.updateTable.next('');
      },
      error: console.log,

    })
  }else{
      this.classeService.getClassiFiltered(this.searchString).subscribe({
        next: (value) => {
          this.dataSource = new MatTableDataSource<ClasseInterface>(value);
          this.updateTable.next('');
        },
        error: console.log,
  
      })
    };
  }

  addClasse(){
    let dialogRef = this.dialog.open(AddClassDialogComponent);
    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        this.classeService.createClasse(val).subscribe(() => {
          this.getClassi()
        })

      }
    });
  }

  openEditDialog(data: ClasseInterface) {
    let dialogRef = this.dialog.open(AddClassDialogComponent, { data });
    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        val.idClasse=data.idClasse
        this.classeService.updateClasse(val).subscribe(() => {
          this.getClassi()
        })
      }
    });
  }

  deleteClass(idClasse: string) {
    this.classeService.deleteClasse(idClasse).subscribe(() => {
      this.getClassi()
    });

  }

  viewProfessors(classe:ClasseInterface){
    let dialogRef = this.dialog.open(ViewProfessorDialogComponent,{data:classe});
  }
}
