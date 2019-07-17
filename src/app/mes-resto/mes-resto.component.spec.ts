import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesRestoComponent } from './mes-resto.component';

describe('MesRestoComponent', () => {
  let component: MesRestoComponent;
  let fixture: ComponentFixture<MesRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesRestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
