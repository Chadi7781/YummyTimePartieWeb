import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAjoutRestaurantComponent } from './demande-ajout-restaurant.component';

describe('DemandeAjoutRestaurantComponent', () => {
  let component: DemandeAjoutRestaurantComponent;
  let fixture: ComponentFixture<DemandeAjoutRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeAjoutRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAjoutRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
