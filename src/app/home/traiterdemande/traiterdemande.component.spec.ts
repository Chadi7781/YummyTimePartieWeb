import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterdemandeComponent } from './traiterdemande.component';

describe('TraiterdemandeComponent', () => {
  let component: TraiterdemandeComponent;
  let fixture: ComponentFixture<TraiterdemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraiterdemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
