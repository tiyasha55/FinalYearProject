import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtLoginComponent } from './pt-login.component';

describe('PtLoginComponent', () => {
  let component: PtLoginComponent;
  let fixture: ComponentFixture<PtLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
