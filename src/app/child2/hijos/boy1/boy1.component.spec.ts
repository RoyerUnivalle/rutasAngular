import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Boy1Component } from './boy1.component';

describe('Boy1Component', () => {
  let component: Boy1Component;
  let fixture: ComponentFixture<Boy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Boy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Boy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
