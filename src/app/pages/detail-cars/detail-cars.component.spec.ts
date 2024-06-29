import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCarsComponent } from './detail-cars.component';

describe('DetailCarsComponent', () => {
  let component: DetailCarsComponent;
  let fixture: ComponentFixture<DetailCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCarsComponent]
    });
    fixture = TestBed.createComponent(DetailCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
