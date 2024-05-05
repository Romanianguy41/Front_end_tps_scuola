import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessorDialogComponent } from './add-professor.component';

describe('AddProfessorComponent', () => {
  let component: AddProfessorDialogComponent;
  let fixture: ComponentFixture<AddProfessorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfessorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfessorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
