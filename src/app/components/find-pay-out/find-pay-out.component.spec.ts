import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPayOutComponent } from './find-pay-out.component';

describe('FindPayOutComponent', () => {
  let component: FindPayOutComponent;
  let fixture: ComponentFixture<FindPayOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPayOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


