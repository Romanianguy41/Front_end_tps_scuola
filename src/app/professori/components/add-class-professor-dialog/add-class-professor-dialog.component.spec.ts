import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassProfessorDialogComponent } from './add-class-professor-dialog.component';

describe('AddClassProfessorDialogComponent', () => {
  let component: AddClassProfessorDialogComponent;
  let fixture: ComponentFixture<AddClassProfessorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassProfessorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassProfessorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
