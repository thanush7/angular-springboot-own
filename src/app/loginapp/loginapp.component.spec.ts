import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginappComponent } from './loginapp.component';

describe('LoginappComponent', () => {
  let component: LoginappComponent;
  let fixture: ComponentFixture<LoginappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
