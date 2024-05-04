import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassDialogComponent } from './add-dialog.component';

describe('AddClassDialogComponent', () => {
  let component: AddClassDialogComponent;
  let fixture: ComponentFixture<AddClassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
