import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsCustomInputComponent } from './points-custom-input.component';

describe('PointsCustomInputComponent', () => {
  let component: PointsCustomInputComponent;
  let fixture: ComponentFixture<PointsCustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsCustomInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
