import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionByWeekGraphComponent } from './production-by-week-graph.component';

describe('ProductionByWeekGraphComponent', () => {
  let component: ProductionByWeekGraphComponent;
  let fixture: ComponentFixture<ProductionByWeekGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionByWeekGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionByWeekGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
