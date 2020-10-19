import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetablosComponent } from './retablos.component';

describe('RetablosComponent', () => {
  let component: RetablosComponent;
  let fixture: ComponentFixture<RetablosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetablosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetablosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
