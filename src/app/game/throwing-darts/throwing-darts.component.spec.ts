import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowingDartsComponent } from './throwing-darts.component';

describe('ThrowingDartsComponent', () => {
  let component: ThrowingDartsComponent;
  let fixture: ComponentFixture<ThrowingDartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrowingDartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrowingDartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
