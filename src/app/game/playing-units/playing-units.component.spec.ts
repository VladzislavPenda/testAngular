import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingUnitsComponent } from './playing-units.component';

describe('PlayingUnitsComponent', () => {
  let component: PlayingUnitsComponent;
  let fixture: ComponentFixture<PlayingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
