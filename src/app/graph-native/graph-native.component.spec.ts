import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNativeComponent } from './graph-native.component';

describe('GraphNativeComponent', () => {
  let component: GraphNativeComponent;
  let fixture: ComponentFixture<GraphNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphNativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
