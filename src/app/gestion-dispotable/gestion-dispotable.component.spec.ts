import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDispotableComponent } from './gestion-dispotable.component';

describe('GestionDispotableComponent', () => {
  let component: GestionDispotableComponent;
  let fixture: ComponentFixture<GestionDispotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDispotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDispotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
