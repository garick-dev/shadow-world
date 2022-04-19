import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFallenComponent } from './city-fallen.component';

describe('CityFallenComponent', () => {
  let component: CityFallenComponent;
  let fixture: ComponentFixture<CityFallenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityFallenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFallenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
