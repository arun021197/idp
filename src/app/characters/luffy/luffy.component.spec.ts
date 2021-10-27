import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuffyComponent } from './luffy.component';

describe('LuffyComponent', () => {
  let component: LuffyComponent;
  let fixture: ComponentFixture<LuffyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuffyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuffyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
