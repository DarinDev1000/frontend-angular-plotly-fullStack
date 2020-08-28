import { Component, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

declare const Plotly: any;

@Component({
  selector: 'app-graph3',
  templateUrl: './graph3.component.html',
  styleUrls: ['./graph3.component.scss']
})
export class Graph3Component implements OnInit {

  public data: any;
  public layout: any;
  public config: any;

  /* The plot target container. */
  @ViewChild('plotContainer') plotContainer: ElementRef;

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

    // the data
    function getrandom(num , mul)
	{
   var value = [ ];
   for(let i=0;i<=num;i++)
   {
    var rand = Math.random() * mul;
    value.push(rand);
   }
   return value;
  }

    this.data=[
      {
       opacity:0.4,
       type: 'scatter3d',
       x: getrandom(50 , -75),
       y: getrandom(50 , -75),
       z: getrandom(50 , -75),
      },
      {
       opacity:0.5,
       type: 'scatter3d',
       x: getrandom(50 , -75),
       y: getrandom(50 , 75),
       z: getrandom(50 , 75),
      },
      {
       opacity:0.5,
       type: 'scatter3d',
       x: getrandom(50 , 100),
       y: getrandom(50 , 100),
       z: getrandom(50 , 100),
      }
  ];
  this.layout = {
    scene:{
     aspectmode: "manual",
     aspectratio: {
       x: 1, y: 0.7, z: 1,
      },
     xaxis: {
      nticks: 9,
      range: [-200, 100],
    },
     yaxis: {
      nticks: 7,
      range: [-100, 100],
    },
     zaxis: {
     nticks: 10,
     range: [-150, 100],
    }},
  };


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
