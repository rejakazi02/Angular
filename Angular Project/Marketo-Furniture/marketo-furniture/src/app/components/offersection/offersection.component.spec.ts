import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersectionComponent } from './offersection.component';

describe('OffersectionComponent', () => {
  let component: OffersectionComponent;
  let fixture: ComponentFixture<OffersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
