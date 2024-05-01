import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClasseService } from 'src/app/classi/service/classe.service';
import { ClasseInterface } from 'src/app/interfaces/classeInterface';
import { StudenteInterface } from 'src/app/interfaces/studentInterface';
import { StudenteService } from '../../service/studenteService';

@Component({
  selector: 'add-class-dialog-class',
  templateUrl: './add-class-dialog.component.html',
  styleUrls: ['./add-class-dialog.component.scss']
})
export class AddClassDialogComponent implements OnInit{

  displayedColumns: string[] = ["classe","sezione","action"];
  dataSource!: MatTableDataSource<ClasseInterface>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private classeService:ClasseService,
    @Inject(MAT_DIALOG_DATA) public data: StudenteInterface,
    public dialogRef: MatDialogRef<AddClassDialogComponent>
  ){
  }

  ngOnInit(): void {
    this.classeService.getclassi().subscribe((value)=>{
      this.dataSource = new MatTableDataSource<ClasseInterface>(value);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(value);
    })
  }

  addClass(classe:ClasseInterface):void{
    this.data.classe = classe;
    this.dialogRef.close(this.data);
  }

  removeClass():void{
    this.dialogRef.close("remove");
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
