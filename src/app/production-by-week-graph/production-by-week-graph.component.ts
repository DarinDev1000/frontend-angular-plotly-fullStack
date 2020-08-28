import { Component, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

// import * as rm from 'typed-rest-client/RestClient';
import axios from 'axios';

declare const Plotly: any;

@Component({
  selector: 'app-production-by-week-graph',
  templateUrl: './production-by-week-graph.component.html',
  styleUrls: ['./production-by-week-graph.component.scss']
})
export class ProductionByWeekGraphComponent implements OnInit {

  public figure: any;
  public data: any;
  public layout: any;
  public config: any;

  /* The plot target container. */
  @ViewChild('plotContainer') plotContainer: ElementRef;


  constructor() { }

  async ngOnInit() {
    try {
      this.initPlot();
    } catch (error) {}
    try {
      this.figure = await this.getGraphFigure();
      this.initPlot();
    } catch (error) {}
  }

  async ngAfterViewInit() {
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
    this.layout = this.figure.layout;

    // the data
    this.data = this.figure.data;

    // the config
    try {
      this.config = this.figure.config;
    } catch (error) {
      this.config = {};
    }

    if (this.data !== undefined && this.layout) {
      // Plotly.newPlot(this.plotContainer.nativeElement, this.data, this.layout, this.config);
      Plotly.newPlot(this.plotContainer.nativeElement, this.data, this.layout, this.config);
    } else {
      console.warn('The data or the layout are not defined');
    }

  }


  /** On resize this method triggers & resize the plot. */
  public onResize() {
    Plotly.Plots.resize(this.plotContainer.nativeElement);
  }

  async getGraphFigure() {
    try {
      const response = await axios.get('http://localhost:5000/api/ppbw');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

}
