import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StudenteInterface } from 'src/app/interfaces/studentInterface';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit{
  @Input()displayedColumns!: string[];
  @Input()dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<StudenteInterface>();
  @Output() addClassEvent = new EventEmitter<StudenteInterface>();
 
  constructor(private dialog: MatDialog){
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['dataSource'] && !changes['dataSource'].firstChange) {
      this.addSpecs();
    }
  }

  ngAfterViewInit() {
    if (this.dataSource && this.sort && this.paginator) {
      this.addSpecs();
    } else {
      setTimeout(() => {
        this.ngAfterViewInit(); 
      }, 100); 
    }
  }
  addSpecs(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteStudente(studente:StudenteInterface): void {
    this.deleteEvent.next(studente.idStudente.toString());
  }

  updateStudente(studente:StudenteInterface): void{
    this.updateEvent.next(studente);
  }
  addClass(studente:StudenteInterface): void{
    this.addClassEvent.next(studente);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openInfoDialog(studente:StudenteInterface){
    let dialogRef = this.dialog.open(InfoDialogComponent, {data: studente});
  }

}
