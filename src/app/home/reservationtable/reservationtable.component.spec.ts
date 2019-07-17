import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationtableComponent } from './reservationtable.component';

describe('ReservationtableComponent', () => {
  let component: ReservationtableComponent;
  let fixture: ComponentFixture<ReservationtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
