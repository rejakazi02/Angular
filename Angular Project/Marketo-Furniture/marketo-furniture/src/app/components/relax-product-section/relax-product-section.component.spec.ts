import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxProductSectionComponent } from './relax-product-section.component';

describe('RelaxProductSectionComponent', () => {
  let component: RelaxProductSectionComponent;
  let fixture: ComponentFixture<RelaxProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelaxProductSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelaxProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
