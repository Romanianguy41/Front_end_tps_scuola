import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaDialogComponent } from './materia-dialog.component';

describe('MateriaDialogComponent', () => {
  let component: MateriaDialogComponent;
  let fixture: ComponentFixture<MateriaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
