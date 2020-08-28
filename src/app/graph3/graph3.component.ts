import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph3',
  templateUrl: './graph3.component.html',
  styleUrls: ['./graph3.component.scss']
})
export class Graph3Component implements OnInit {

  public graph = {
    data: [
      {
        opacity:0.4,
        type: 'scatter3d',
        x: this.getrandom(50 , -75),
        y: this.getrandom(50 , -75),
        z: this.getrandom(50 , -75),
       },
       {
        opacity:0.5,
        type: 'scatter3d',
        x: this.getrandom(50 , -75),
        y: this.getrandom(50 , 75),
        z: this.getrandom(50 , 75),
       },
       {
        opacity:0.5,
        type: 'scatter3d',
        x: this.getrandom(50 , 100),
        y: this.getrandom(50 , 100),
        z: this.getrandom(50 , 100),
       }
    ],
    layout: {
      autosize: true,
      // width: 800,
      // height: 800,
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
    },
    config: {
      staticPlot: false,
      responsive: true
    }
  };

  getrandom(num , mul) {
    var value = [ ];
    for(let i=0; i<=num; i++)
    {
    var rand = Math.random() * mul;
    value.push(rand);
    }
    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
