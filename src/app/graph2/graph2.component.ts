import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.scss']
})
export class Graph2Component implements OnInit {

  public graph = {
    data: [
      {
        type: 'bar',
        x: [1, 2, 3, 4],
        y: [5, 10, 2, 8],
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
      }
    ],
    layout: {
      title: 'Responsive to window\'s size!',
      font: {size: 18}
    },
    config: {
      staticPlot: false,
      responsive: true
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
