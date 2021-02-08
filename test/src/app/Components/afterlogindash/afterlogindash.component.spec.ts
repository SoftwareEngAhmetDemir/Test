import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterlogindashComponent } from './afterlogindash.component';

describe('AfterlogindashComponent', () => {
  let component: AfterlogindashComponent;
  let fixture: ComponentFixture<AfterlogindashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterlogindashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterlogindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
