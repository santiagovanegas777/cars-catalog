import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedCarComponent } from './updated-car.component';

describe('UpdatedCarComponent', () => {
  let component: UpdatedCarComponent;
  let fixture: ComponentFixture<UpdatedCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedCarComponent]
    });
    fixture = TestBed.createComponent(UpdatedCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
