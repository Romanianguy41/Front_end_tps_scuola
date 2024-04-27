import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassiComponent } from './classi.component';

describe('ClassiComponent', () => {
  let component: ClassiComponent;
  let fixture: ComponentFixture<ClassiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
