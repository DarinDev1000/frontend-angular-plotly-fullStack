import { Component, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

declare const Plotly: any;

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.scss']
})
export class Graph2Component implements OnInit {

  public data: any;
  public layout: any;
  public config: any;

  /* The plot target container. */
  @ViewChild('plotContainer2') plotContainer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initPlot();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.data && changes.data.previousValue) {
      this.initPlot();
    }

    if (changes && changes.layout && changes.layout.previousValue) {
      this.initPlot();
    }
  }


  // ngOnDestroy() {
  //   // if (this._theme$) { this._theme$.unsubscribe(); }
  // }


  private initPlot() {

    // this.getTheme();

    // the layout.
    this.layout = {
      title: 'Responsive to window\'s size!',
      font: {size: 18}
    };

    const trace1 = {
      type: 'bar',
      x: [1, 2, 3, 4],
      y: [5, 10, 2, 8],
      marker: {
          color: '#C8A2C8',
          line: {
              width: 2.5
          }
      }
    };

    // the data
    this.data = [ trace1 ];

    // the config
    this.config = {
      staticPlot: false,
      responsive: true
    };

    if (this.data !== undefined && this.layout) {
      Plotly.newPlot(this.plotContainer.nativeElement, this.data, this.layout, this.config);
    } else {
      console.warn('The data or the layout are not defined');
    }

  }


  /** On resize this method triggers & resize the plot. */
  public onResize() {
    Plotly.Plots.resize(this.plotContainer.nativeElement);
  }

}
