import { Component, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import axios from 'axios';

// import * as Plotly from 'plotly.js';
// import {Config, Data, Layout} from 'plotly.js';
declare const Plotly: any;

@Component({
  selector: 'app-production-by-week-graph',
  templateUrl: './production-by-week-graph.component.html',
  styleUrls: ['./production-by-week-graph.component.scss']
})
export class ProductionByWeekGraphComponent implements OnInit {

  public figure: any = this.getInitialWeekData();
  public data: any;
  public layout: any;
  public config: any;

  public getDataResponse: any;

  /* The plot target container. */
  @ViewChild('plotContainer') plotContainer: ElementRef;


  constructor() { }

  async ngOnInit() {
    try {
      this.getDataResponse = this.getGraphFigure();
    } catch (error) {
      console.error(error);
    }
  }

  async ngAfterViewInit() {
    try {
      this.initPlot();
    } catch (error) {
      console.error(error);
    }
    try {
      this.figure = await this.getDataResponse;
      this.initPlot();
    } catch (error) {
      console.error(error);
    }
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
    this.config = {
        staticPlot: true,
        // displayModeBar: false,
        responsive: true
      };
    // try {
    //   this.config = this.figure.config;
    // } catch (error) {
    //   this.config = {
    //     staticPlot: true,
    //     displayModeBar: false,
    //     responsive: true
    //   };
    // }

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

  getInitialWeekData() {
    return {
      "data": [
        {
          "hovertemplate": "PenGroup=501-02<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06"
          ],
          "xaxis": "x9",
          "y": [
            13.0,
            22.0,
            20.0,
            25.0,
            14.0,
            24.0,
            27.0,
            21.0,
            20.0,
            21.0,
            15.0,
            21.0,
            23.0,
            20.0,
            22.0
          ],
          "yaxis": "y9"
        },
        {
          "hovertemplate": "PenGroup=503-04<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06"
          ],
          "xaxis": "x10",
          "y": [
            26.0,
            29.0,
            22.0,
            48.0,
            29.0,
            20.0,
            29.0,
            23.0,
            38.0,
            22.0,
            27.0,
            30.0,
            25.0,
            27.0,
            37.0
          ],
          "yaxis": "y10"
        },
        {
          "hovertemplate": "PenGroup=505-06<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06"
          ],
          "xaxis": "x11",
          "y": [
            35.0,
            22.0,
            36.0,
            37.0,
            22.0,
            30.0,
            19.0,
            20.0,
            29.0,
            16.0,
            19.0,
            25.0,
            21.0,
            11.0,
            23.0
          ],
          "yaxis": "y11"
        },
        {
          "hovertemplate": "PenGroup=507-08<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06"
          ],
          "xaxis": "x12",
          "y": [
            21.0,
            18.0,
            26.0,
            35.0,
            32.0,
            33.0,
            37.0,
            18.0,
            22.0,
            20.0,
            14.0,
            26.0,
            26.0,
            27.0,
            39.0
          ],
          "yaxis": "y12"
        },
        {
          "hovertemplate": "PenGroup=509-10<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06"
          ],
          "xaxis": "x5",
          "y": [
            38.0,
            25.0,
            44.0,
            39.0,
            36.0,
            35.0,
            23.0,
            17.0,
            14.0,
            18.0,
            12.0,
            19.0,
            20.0,
            26.0,
            27.0
          ],
          "yaxis": "y5"
        },
        {
          "hovertemplate": "PenGroup=511-12<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06"
          ],
          "xaxis": "x6",
          "y": [
            24.0,
            21.0,
            31.0,
            38.0,
            28.0,
            18.0,
            17.0,
            9.0,
            29.0,
            22.0,
            27.0,
            37.0,
            19.0,
            20.0,
            37.0
          ],
          "yaxis": "y6"
        },
        {
          "hovertemplate": "PenGroup=513-14<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06"
          ],
          "xaxis": "x7",
          "y": [
            21.0,
            28.0,
            32.0,
            36.0,
            28.0,
            16.0,
            26.0,
            29.0,
            21.0,
            15.0,
            15.0,
            32.0,
            20.0,
            16.0,
            28.0
          ],
          "yaxis": "y7"
        },
        {
          "hovertemplate": "PenGroup=515-16<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-06"
          ],
          "xaxis": "x8",
          "y": [
            19.0,
            19.0,
            21.0,
            21.0,
            14.0,
            29.0,
            9.0,
            13.0,
            18.0,
            8.0,
            13.0,
            19.0,
            18.0,
            2.0
          ],
          "yaxis": "y8"
        },
        {
          "hovertemplate": "PenGroup=517-17<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06"
          ],
          "xaxis": "x",
          "y": [
            11.0,
            13.0,
            12.0,
            19.0,
            15.0,
            13.0,
            15.0,
            8.0,
            9.0,
            6.0,
            5.0,
            14.0,
            14.0,
            11.0,
            9.0
          ],
          "yaxis": "y"
        },
        {
          "hovertemplate": "PenGroup=518-18<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04"
          ],
          "xaxis": "x2",
          "y": [
            2.0,
            7.0,
            5.0,
            7.0,
            8.0,
            6.0,
            5.0,
            6.0,
            7.0,
            4.0,
            3.0,
            4.0,
            14.0
          ],
          "yaxis": "y2"
        },
        {
          "hovertemplate": "PenGroup=519-20<br>Year-Mo=%{x}<br>Production=%{y}<extra></extra>",
          "legendgroup": "",
          "line": {
            "color": "#636efa",
            "dash": "solid"
          },
          "mode": "lines",
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "type": "scatter",
          "x": [
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06"
          ],
          "xaxis": "x3",
          "y": [
            18.0,
            20.0,
            22.0,
            34.0,
            27.0,
            28.0,
            12.0,
            12.0,
            20.0,
            15.0,
            18.0,
            29.0,
            20.0,
            27.0,
            29.0
          ],
          "yaxis": "y3"
        }
      ],
      "layout": {
        "annotations": [
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=517-17",
            "x": 0.1175,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.2866666666666666,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=518-18",
            "x": 0.3725,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.2866666666666666,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=519-20",
            "x": 0.6275,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.2866666666666666,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=509-10",
            "x": 0.1175,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.6433333333333333,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=511-12",
            "x": 0.3725,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.6433333333333333,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=513-14",
            "x": 0.6275,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.6433333333333333,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=515-16",
            "x": 0.8824999999999998,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.6433333333333333,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=501-02",
            "x": 0.1175,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.9999999999999999,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=503-04",
            "x": 0.3725,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.9999999999999999,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=505-06",
            "x": 0.6275,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.9999999999999999,
            "yanchor": "bottom",
            "yref": "paper"
          },
          {
            "font": {},
            "showarrow": false,
            "text": "PenGroup=507-08",
            "x": 0.8824999999999998,
            "xanchor": "center",
            "xref": "paper",
            "y": 0.9999999999999999,
            "yanchor": "bottom",
            "yref": "paper"
          }
        ],
        "legend": {
          "tracegroupgap": 0
        },
        "template": {
          "data": {
            "bar": [
              {
                "error_x": {
                  "color": "#2a3f5f"
                },
                "error_y": {
                  "color": "#2a3f5f"
                },
                "marker": {
                  "line": {
                    "color": "#E5ECF6",
                    "width": 0.5
                  }
                },
                "type": "bar"
              }
            ],
            "barpolar": [
              {
                "marker": {
                  "line": {
                    "color": "#E5ECF6",
                    "width": 0.5
                  }
                },
                "type": "barpolar"
              }
            ],
            "carpet": [
              {
                "aaxis": {
                  "endlinecolor": "#2a3f5f",
                  "gridcolor": "white",
                  "linecolor": "white",
                  "minorgridcolor": "white",
                  "startlinecolor": "#2a3f5f"
                },
                "baxis": {
                  "endlinecolor": "#2a3f5f",
                  "gridcolor": "white",
                  "linecolor": "white",
                  "minorgridcolor": "white",
                  "startlinecolor": "#2a3f5f"
                },
                "type": "carpet"
              }
            ],
            "choropleth": [
              {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "type": "choropleth"
              }
            ],
            "contour": [
              {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [
                  [
                    0.0,
                    "#0d0887"
                  ],
                  [
                    0.1111111111111111,
                    "#46039f"
                  ],
                  [
                    0.2222222222222222,
                    "#7201a8"
                  ],
                  [
                    0.3333333333333333,
                    "#9c179e"
                  ],
                  [
                    0.4444444444444444,
                    "#bd3786"
                  ],
                  [
                    0.5555555555555556,
                    "#d8576b"
                  ],
                  [
                    0.6666666666666666,
                    "#ed7953"
                  ],
                  [
                    0.7777777777777778,
                    "#fb9f3a"
                  ],
                  [
                    0.8888888888888888,
                    "#fdca26"
                  ],
                  [
                    1.0,
                    "#f0f921"
                  ]
                ],
                "type": "contour"
              }
            ],
            "contourcarpet": [
              {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "type": "contourcarpet"
              }
            ],
            "heatmap": [
              {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [
                  [
                    0.0,
                    "#0d0887"
                  ],
                  [
                    0.1111111111111111,
                    "#46039f"
                  ],
                  [
                    0.2222222222222222,
                    "#7201a8"
                  ],
                  [
                    0.3333333333333333,
                    "#9c179e"
                  ],
                  [
                    0.4444444444444444,
                    "#bd3786"
                  ],
                  [
                    0.5555555555555556,
                    "#d8576b"
                  ],
                  [
                    0.6666666666666666,
                    "#ed7953"
                  ],
                  [
                    0.7777777777777778,
                    "#fb9f3a"
                  ],
                  [
                    0.8888888888888888,
                    "#fdca26"
                  ],
                  [
                    1.0,
                    "#f0f921"
                  ]
                ],
                "type": "heatmap"
              }
            ],
            "heatmapgl": [
              {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [
                  [
                    0.0,
                    "#0d0887"
                  ],
                  [
                    0.1111111111111111,
                    "#46039f"
                  ],
                  [
                    0.2222222222222222,
                    "#7201a8"
                  ],
                  [
                    0.3333333333333333,
                    "#9c179e"
                  ],
                  [
                    0.4444444444444444,
                    "#bd3786"
                  ],
                  [
                    0.5555555555555556,
                    "#d8576b"
                  ],
                  [
                    0.6666666666666666,
                    "#ed7953"
                  ],
                  [
                    0.7777777777777778,
                    "#fb9f3a"
                  ],
                  [
                    0.8888888888888888,
                    "#fdca26"
                  ],
                  [
                    1.0,
                    "#f0f921"
                  ]
                ],
                "type": "heatmapgl"
              }
            ],
            "histogram": [
              {
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "histogram"
              }
            ],
            "histogram2d": [
              {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [
                  [
                    0.0,
                    "#0d0887"
                  ],
                  [
                    0.1111111111111111,
                    "#46039f"
                  ],
                  [
                    0.2222222222222222,
                    "#7201a8"
                  ],
                  [
                    0.3333333333333333,
                    "#9c179e"
                  ],
                  [
                    0.4444444444444444,
                    "#bd3786"
                  ],
                  [
                    0.5555555555555556,
                    "#d8576b"
                  ],
                  [
                    0.6666666666666666,
                    "#ed7953"
                  ],
                  [
                    0.7777777777777778,
                    "#fb9f3a"
                  ],
                  [
                    0.8888888888888888,
                    "#fdca26"
                  ],
                  [
                    1.0,
                    "#f0f921"
                  ]
                ],
                "type": "histogram2d"
              }
            ],
            "histogram2dcontour": [
              {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [
                  [
                    0.0,
                    "#0d0887"
                  ],
                  [
                    0.1111111111111111,
                    "#46039f"
                  ],
                  [
                    0.2222222222222222,
                    "#7201a8"
                  ],
                  [
                    0.3333333333333333,
                    "#9c179e"
                  ],
                  [
                    0.4444444444444444,
                    "#bd3786"
                  ],
                  [
                    0.5555555555555556,
                    "#d8576b"
                  ],
                  [
                    0.6666666666666666,
                    "#ed7953"
                  ],
                  [
                    0.7777777777777778,
                    "#fb9f3a"
                  ],
                  [
                    0.8888888888888888,
                    "#fdca26"
                  ],
                  [
                    1.0,
                    "#f0f921"
                  ]
                ],
                "type": "histogram2dcontour"
              }
            ],
            "mesh3d": [
              {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "type": "mesh3d"
              }
            ],
            "parcoords": [
              {
                "line": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "parcoords"
              }
            ],
            "pie": [
              {
                "automargin": true,
                "type": "pie"
              }
            ],
            "scatter": [
              {
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "scatter"
              }
            ],
            "scatter3d": [
              {
                "line": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "scatter3d"
              }
            ],
            "scattercarpet": [
              {
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "scattercarpet"
              }
            ],
            "scattergeo": [
              {
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "scattergeo"
              }
            ],
            "scattergl": [
              {
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "scattergl"
              }
            ],
            "scattermapbox": [
              {
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "scattermapbox"
              }
            ],
            "scatterpolar": [
              {
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "scatterpolar"
              }
            ],
            "scatterpolargl": [
              {
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "scatterpolargl"
              }
            ],
            "scatterternary": [
              {
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "type": "scatterternary"
              }
            ],
            "surface": [
              {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [
                  [
                    0.0,
                    "#0d0887"
                  ],
                  [
                    0.1111111111111111,
                    "#46039f"
                  ],
                  [
                    0.2222222222222222,
                    "#7201a8"
                  ],
                  [
                    0.3333333333333333,
                    "#9c179e"
                  ],
                  [
                    0.4444444444444444,
                    "#bd3786"
                  ],
                  [
                    0.5555555555555556,
                    "#d8576b"
                  ],
                  [
                    0.6666666666666666,
                    "#ed7953"
                  ],
                  [
                    0.7777777777777778,
                    "#fb9f3a"
                  ],
                  [
                    0.8888888888888888,
                    "#fdca26"
                  ],
                  [
                    1.0,
                    "#f0f921"
                  ]
                ],
                "type": "surface"
              }
            ],
            "table": [
              {
                "cells": {
                  "fill": {
                    "color": "#EBF0F8"
                  },
                  "line": {
                    "color": "white"
                  }
                },
                "header": {
                  "fill": {
                    "color": "#C8D4E3"
                  },
                  "line": {
                    "color": "white"
                  }
                },
                "type": "table"
              }
            ]
          },
          "layout": {
            "annotationdefaults": {
              "arrowcolor": "#2a3f5f",
              "arrowhead": 0,
              "arrowwidth": 1
            },
            "coloraxis": {
              "colorbar": {
                "outlinewidth": 0,
                "ticks": ""
              }
            },
            "colorscale": {
              "diverging": [
                [
                  0,
                  "#8e0152"
                ],
                [
                  0.1,
                  "#c51b7d"
                ],
                [
                  0.2,
                  "#de77ae"
                ],
                [
                  0.3,
                  "#f1b6da"
                ],
                [
                  0.4,
                  "#fde0ef"
                ],
                [
                  0.5,
                  "#f7f7f7"
                ],
                [
                  0.6,
                  "#e6f5d0"
                ],
                [
                  0.7,
                  "#b8e186"
                ],
                [
                  0.8,
                  "#7fbc41"
                ],
                [
                  0.9,
                  "#4d9221"
                ],
                [
                  1,
                  "#276419"
                ]
              ],
              "sequential": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ],
              "sequentialminus": [
                [
                  0.0,
                  "#0d0887"
                ],
                [
                  0.1111111111111111,
                  "#46039f"
                ],
                [
                  0.2222222222222222,
                  "#7201a8"
                ],
                [
                  0.3333333333333333,
                  "#9c179e"
                ],
                [
                  0.4444444444444444,
                  "#bd3786"
                ],
                [
                  0.5555555555555556,
                  "#d8576b"
                ],
                [
                  0.6666666666666666,
                  "#ed7953"
                ],
                [
                  0.7777777777777778,
                  "#fb9f3a"
                ],
                [
                  0.8888888888888888,
                  "#fdca26"
                ],
                [
                  1.0,
                  "#f0f921"
                ]
              ]
            },
            "colorway": [
              "#636efa",
              "#EF553B",
              "#00cc96",
              "#ab63fa",
              "#FFA15A",
              "#19d3f3",
              "#FF6692",
              "#B6E880",
              "#FF97FF",
              "#FECB52"
            ],
            "font": {
              "color": "#2a3f5f"
            },
            "geo": {
              "bgcolor": "white",
              "lakecolor": "white",
              "landcolor": "#E5ECF6",
              "showlakes": true,
              "showland": true,
              "subunitcolor": "white"
            },
            "hoverlabel": {
              "align": "left"
            },
            "hovermode": "closest",
            "mapbox": {
              "style": "light"
            },
            "paper_bgcolor": "white",
            "plot_bgcolor": "#E5ECF6",
            "polar": {
              "angularaxis": {
                "gridcolor": "white",
                "linecolor": "white",
                "ticks": ""
              },
              "bgcolor": "#E5ECF6",
              "radialaxis": {
                "gridcolor": "white",
                "linecolor": "white",
                "ticks": ""
              }
            },
            "scene": {
              "xaxis": {
                "backgroundcolor": "#E5ECF6",
                "gridcolor": "white",
                "gridwidth": 2,
                "linecolor": "white",
                "showbackground": true,
                "ticks": "",
                "zerolinecolor": "white"
              },
              "yaxis": {
                "backgroundcolor": "#E5ECF6",
                "gridcolor": "white",
                "gridwidth": 2,
                "linecolor": "white",
                "showbackground": true,
                "ticks": "",
                "zerolinecolor": "white"
              },
              "zaxis": {
                "backgroundcolor": "#E5ECF6",
                "gridcolor": "white",
                "gridwidth": 2,
                "linecolor": "white",
                "showbackground": true,
                "ticks": "",
                "zerolinecolor": "white"
              }
            },
            "shapedefaults": {
              "line": {
                "color": "#2a3f5f"
              }
            },
            "ternary": {
              "aaxis": {
                "gridcolor": "white",
                "linecolor": "white",
                "ticks": ""
              },
              "baxis": {
                "gridcolor": "white",
                "linecolor": "white",
                "ticks": ""
              },
              "bgcolor": "#E5ECF6",
              "caxis": {
                "gridcolor": "white",
                "linecolor": "white",
                "ticks": ""
              }
            },
            "title": {
              "x": 0.05
            },
            "xaxis": {
              "automargin": true,
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": "",
              "title": {
                "standoff": 15
              },
              "zerolinecolor": "white",
              "zerolinewidth": 2
            },
            "yaxis": {
              "automargin": true,
              "gridcolor": "white",
              "linecolor": "white",
              "ticks": "",
              "title": {
                "standoff": 15
              },
              "zerolinecolor": "white",
              "zerolinewidth": 2
            }
          }
        },
        "title": {
          "text": "Production by PenGroup"
        },
        "xaxis": {
          "anchor": "y",
          "domain": [
            0.0,
            0.235
          ],
          "tickangle": 90,
          "title": {
            "text": "Year-Mo"
          }
        },
        "xaxis10": {
          "anchor": "y10",
          "domain": [
            0.255,
            0.49
          ],
          "matches": "x",
          "showticklabels": false,
          "tickangle": 90
        },
        "xaxis11": {
          "anchor": "y11",
          "domain": [
            0.51,
            0.745
          ],
          "matches": "x",
          "showticklabels": false,
          "tickangle": 90
        },
        "xaxis12": {
          "anchor": "y12",
          "domain": [
            0.7649999999999999,
            0.9999999999999999
          ],
          "matches": "x",
          "showticklabels": false,
          "tickangle": 90
        },
        "xaxis2": {
          "anchor": "y2",
          "domain": [
            0.255,
            0.49
          ],
          "matches": "x",
          "tickangle": 90,
          "title": {
            "text": "Year-Mo"
          }
        },
        "xaxis3": {
          "anchor": "y3",
          "domain": [
            0.51,
            0.745
          ],
          "matches": "x",
          "tickangle": 90,
          "title": {
            "text": "Year-Mo"
          }
        },
        "xaxis4": {
          "anchor": "y4",
          "domain": [
            0.7649999999999999,
            0.9999999999999999
          ],
          "matches": "x",
          "tickangle": 90,
          "title": {
            "text": "Year-Mo"
          }
        },
        "xaxis5": {
          "anchor": "y5",
          "domain": [
            0.0,
            0.235
          ],
          "matches": "x",
          "showticklabels": false,
          "tickangle": 90
        },
        "xaxis6": {
          "anchor": "y6",
          "domain": [
            0.255,
            0.49
          ],
          "matches": "x",
          "showticklabels": false,
          "tickangle": 90
        },
        "xaxis7": {
          "anchor": "y7",
          "domain": [
            0.51,
            0.745
          ],
          "matches": "x",
          "showticklabels": false,
          "tickangle": 90
        },
        "xaxis8": {
          "anchor": "y8",
          "domain": [
            0.7649999999999999,
            0.9999999999999999
          ],
          "matches": "x",
          "showticklabels": false,
          "tickangle": 90
        },
        "xaxis9": {
          "anchor": "y9",
          "domain": [
            0.0,
            0.235
          ],
          "matches": "x",
          "showticklabels": false,
          "tickangle": 90
        },
        "yaxis": {
          "anchor": "x",
          "domain": [
            0.0,
            0.2866666666666666
          ],
          "title": {
            "text": "Production"
          }
        },
        "yaxis10": {
          "anchor": "x10",
          "domain": [
            0.7133333333333333,
            0.9999999999999999
          ],
          "matches": "y",
          "showticklabels": false
        },
        "yaxis11": {
          "anchor": "x11",
          "domain": [
            0.7133333333333333,
            0.9999999999999999
          ],
          "matches": "y",
          "showticklabels": false
        },
        "yaxis12": {
          "anchor": "x12",
          "domain": [
            0.7133333333333333,
            0.9999999999999999
          ],
          "matches": "y",
          "showticklabels": false
        },
        "yaxis2": {
          "anchor": "x2",
          "domain": [
            0.0,
            0.2866666666666666
          ],
          "matches": "y",
          "showticklabels": false
        },
        "yaxis3": {
          "anchor": "x3",
          "domain": [
            0.0,
            0.2866666666666666
          ],
          "matches": "y",
          "showticklabels": false
        },
        "yaxis4": {
          "anchor": "x4",
          "domain": [
            0.0,
            0.2866666666666666
          ],
          "matches": "y",
          "showticklabels": false
        },
        "yaxis5": {
          "anchor": "x5",
          "domain": [
            0.35666666666666663,
            0.6433333333333333
          ],
          "matches": "y",
          "title": {
            "text": "Production"
          }
        },
        "yaxis6": {
          "anchor": "x6",
          "domain": [
            0.35666666666666663,
            0.6433333333333333
          ],
          "matches": "y",
          "showticklabels": false
        },
        "yaxis7": {
          "anchor": "x7",
          "domain": [
            0.35666666666666663,
            0.6433333333333333
          ],
          "matches": "y",
          "showticklabels": false
        },
        "yaxis8": {
          "anchor": "x8",
          "domain": [
            0.35666666666666663,
            0.6433333333333333
          ],
          "matches": "y",
          "showticklabels": false
        },
        "yaxis9": {
          "anchor": "x9",
          "domain": [
            0.7133333333333333,
            0.9999999999999999
          ],
          "matches": "y",
          "title": {
            "text": "Production"
          }
        }
      }
    }
  }

}
