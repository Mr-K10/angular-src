import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedformComponent } from './medform.component';

describe('MedformComponent', () => {
  let component: MedformComponent;
  let fixture: ComponentFixture<MedformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
