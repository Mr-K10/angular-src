import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcentersComponent } from './medcenters.component';

describe('MedcentersComponent', () => {
  let component: MedcentersComponent;
  let fixture: ComponentFixture<MedcentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
