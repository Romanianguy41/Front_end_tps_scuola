import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';
import { InfoProfessoreDialogComponent } from '../info-dialog/info-dialog.component';

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
  @Output() updateEvent = new EventEmitter<ProfessoreInterface>();
  @Output() viewClassEvent = new EventEmitter<ProfessoreInterface>();
 
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

  deleteProfessore(professore:ProfessoreInterface): void {
    this.deleteEvent.next(professore.idProfessore.toString());
  }

  updateProfessore(professore:ProfessoreInterface): void{
    this.updateEvent.next(professore);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openInfoDialog(Professore:ProfessoreInterface){
    this.dialog.open(InfoProfessoreDialogComponent, {data: Professore});
  }

  addClass(professore:ProfessoreInterface) {
    this.viewClassEvent.next(professore);
  }

}
