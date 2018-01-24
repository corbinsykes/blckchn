import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularStatComponent } from './popular-stat.component';

describe('PopularStatComponent', () => {
  let component: PopularStatComponent;
  let fixture: ComponentFixture<PopularStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
