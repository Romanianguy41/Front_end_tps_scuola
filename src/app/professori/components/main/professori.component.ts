import { Component, ViewChild } from '@angular/core';
import { ProfessoriService } from '../../service/professori-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AddDialogComponent } from 'src/app/studenti/components/add-dialog/add-dialog.component';
import { ClasseDialogComponent } from '../classe-dialog/classe-dialog.component';

@Component({
  selector: 'app-professori',
  templateUrl: './professori.component.html',
  styleUrls: ['./professori.component.scss']
})
export class ProfessoriComponent {
  
  constructor(private dialog: MatDialog, private professoreService: ProfessoriService) { }
  @ViewChild("table") table!: MatTable<ProfessoreInterface>;
  studenti!: ProfessoreInterface[];
  displayedColumns: string[] = ['cognome', 'nome', 'codfiscale', 'email', 'action'];
  dataSource!: MatTableDataSource<ProfessoreInterface>;

  searchString!: string;

  ngOnInit(): void {
    this.getProfessori();
  }

  getProfessori() {
    if(this.searchString === undefined){
    this.professoreService.getProfessori().subscribe({
      next: (res) => {
        console.log(res)
        this.dataSource = new MatTableDataSource<ProfessoreInterface>(res);
      },
      error: console.log,

    })
  }else{
      this.professoreService.getProfessoriFiltered(this.searchString).subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource<ProfessoreInterface>(res);
        },
        error: console.log,
  
      })
    };
  }


  openDialog() {
    let dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        this.professoreService.createProfessore(val).subscribe(() => {
          this.getProfessori()
        })

      }
    });
  }

  deleteStudent(idStudente: string) {
    this.professoreService.deleteProfessore(idStudente).subscribe(() => {
      this.getProfessori()
    });

  }

  onFilterResearch(searchString:string){
    this.searchString = searchString
    console.log(searchString);
    this.getProfessori();
  }

  openEditDialog(data: ProfessoreInterface) {
    data.dataNascita = new Date (data.dataNascita)
    console.log("data: ")
    console.log(data)
    let dialogRef = this.dialog.open(AddDialogComponent, { data });
    dialogRef.afterClosed().subscribe((val) => {
      console.log(val);
      if (val) {
        val.idProfessore=data.idProfessore
        this.professoreService.updateProfessore(val).subscribe(() => {
          this.getProfessori()
        })
      }
    });
  }
  viewClass(professoreInterface:ProfessoreInterface){
    let dialogRef = this.dialog.open(ClasseDialogComponent, { data:professoreInterface });
  }

}
