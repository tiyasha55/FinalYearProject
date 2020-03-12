import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtRegComponent } from './pt-reg.component';

describe('PtRegComponent', () => {
  let component: PtRegComponent;
  let fixture: ComponentFixture<PtRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
