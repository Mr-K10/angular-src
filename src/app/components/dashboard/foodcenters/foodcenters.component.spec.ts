import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcentersComponent } from './foodcenters.component';

describe('FoodcentersComponent', () => {
  let component: FoodcentersComponent;
  let fixture: ComponentFixture<FoodcentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
