import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurComponent } from './erreur.component';

describe('ErreurComponent', () => {
  let component: ErreurComponent;
  let fixture: ComponentFixture<ErreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
