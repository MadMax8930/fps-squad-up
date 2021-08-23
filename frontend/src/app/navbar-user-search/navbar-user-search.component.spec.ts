import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUserSearchComponent } from './navbar-user-search.component';

describe('NavbarUserSearchComponent', () => {
  let component: NavbarUserSearchComponent;
  let fixture: ComponentFixture<NavbarUserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUserSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
