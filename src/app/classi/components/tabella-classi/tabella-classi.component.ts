import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClasseInterface } from 'src/app/interfaces/classeInterface';
import { ProfessoreInterface } from 'src/app/interfaces/professorInterface';
import { ClasseService } from '../../service/classe.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tabella-classi',
  templateUrl: './tabella-classi.component.html',
  styleUrls: ['./tabella-classi.component.scss']
})
export class TabellaClassiComponent implements OnChanges {
  @Input()displayedColumns!: string[];
  @Input()dataSource!: MatTableDataSource<ClasseInterface>;
  @Input() updateTable!: BehaviorSubject<string>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<ClasseInterface>();
  @Output() viewProfessorEvent = new EventEmitter<ClasseInterface>();

 
  constructor(private dialog: MatDialog, classeService:ClasseService){
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

  deleteClasse(classe:ClasseInterface): void {
    this.deleteEvent.next(classe.idClasse.toString());
  }

  updateClasse(classe:ClasseInterface): void{
    this.updateEvent.next(classe);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data: ClasseInterface, filter: string) => {
      const classeAsString = data.classe?.toString().toLowerCase();
      const sezione = data.sezione?.toLowerCase();
      if (classeAsString && sezione) {
        if(classeAsString.includes(filter)){
          return true
        }
        if(sezione.includes(filter)){
          return true
        }
      }
      return false;
    };
    this.dataSource.filter = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewProfessore(classe:ClasseInterface) {
    this.viewProfessorEvent.next(classe);
  }


}
