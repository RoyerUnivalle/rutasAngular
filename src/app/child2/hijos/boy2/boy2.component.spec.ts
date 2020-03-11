import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boy2Component } from './boy2.component';

describe('Boy2Component', () => {
  let component: Boy2Component;
  let fixture: ComponentFixture<Boy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
