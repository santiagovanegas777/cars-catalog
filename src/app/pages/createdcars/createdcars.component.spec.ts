import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedcarsComponent } from './createdcars.component';

describe('CreatedcarsComponent', () => {
  let component: CreatedcarsComponent;
  let fixture: ComponentFixture<CreatedcarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedcarsComponent]
    });
    fixture = TestBed.createComponent(CreatedcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
