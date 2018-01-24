import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkActivityComponent } from './network-activity.component';

describe('NetworkActivityComponent', () => {
  let component: NetworkActivityComponent;
  let fixture: ComponentFixture<NetworkActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
