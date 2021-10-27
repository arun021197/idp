import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Naruto1Component } from './naruto1.component';

describe('Naruto1Component', () => {
  let component: Naruto1Component;
  let fixture: ComponentFixture<Naruto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Naruto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Naruto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
