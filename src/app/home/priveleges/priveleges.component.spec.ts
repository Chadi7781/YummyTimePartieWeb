import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivelegesComponent } from './priveleges.component';

describe('PrivelegesComponent', () => {
  let component: PrivelegesComponent;
  let fixture: ComponentFixture<PrivelegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivelegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivelegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
