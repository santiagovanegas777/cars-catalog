import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCarsComponent } from './delete-cars.component';

describe('DeleteCarsComponent', () => {
  let component: DeleteCarsComponent;
  let fixture: ComponentFixture<DeleteCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCarsComponent]
    });
    fixture = TestBed.createComponent(DeleteCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
