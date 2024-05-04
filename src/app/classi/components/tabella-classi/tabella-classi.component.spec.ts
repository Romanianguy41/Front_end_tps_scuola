import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaClassiComponent } from './tabella-classi.component';

describe('TabellaClassiComponent', () => {
  let component: TabellaClassiComponent;
  let fixture: ComponentFixture<TabellaClassiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellaClassiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaClassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
