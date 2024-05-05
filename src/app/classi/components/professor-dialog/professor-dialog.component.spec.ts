import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProfessorDialogComponent } from './professor-dialog.component';


describe('DialogAddClassComponent', () => {
  let component: ViewProfessorDialogComponent;
  let fixture: ComponentFixture<ViewProfessorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfessorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfessorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
