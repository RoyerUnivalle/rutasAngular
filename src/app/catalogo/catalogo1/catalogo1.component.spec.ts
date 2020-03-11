import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogo1Component } from './catalogo1.component';

describe('Catalogo1Component', () => {
  let component: Catalogo1Component;
  let fixture: ComponentFixture<Catalogo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Catalogo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Catalogo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
