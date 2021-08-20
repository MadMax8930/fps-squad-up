import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVisitorComponent } from './navbar-visitor.component';

describe('NavbarVisitorComponent', () => {
  let component: NavbarVisitorComponent;
  let fixture: ComponentFixture<NavbarVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
