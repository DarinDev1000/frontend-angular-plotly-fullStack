import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionByMonthGraphComponent } from './production-by-month-graph.component';

describe('ProductionByMonthGraphComponent', () => {
  let component: ProductionByMonthGraphComponent;
  let fixture: ComponentFixture<ProductionByMonthGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionByMonthGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionByMonthGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
