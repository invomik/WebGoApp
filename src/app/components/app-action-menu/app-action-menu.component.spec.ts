import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActionMenuComponent } from './app-action-menu.component';

describe('AppActionMenuComponent', () => {
  let component: AppActionMenuComponent;
  let fixture: ComponentFixture<AppActionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppActionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
