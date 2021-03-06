import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { GraphComponent } from './graph/graph.component';
import { Graph2Component } from './graph2/graph2.component';
import { Graph3Component } from './graph3/graph3.component';
import { GraphNativeComponent } from './graph-native/graph-native.component';
import { ProductionByWeekGraphComponent } from './production-by-week-graph/production-by-week-graph.component';
import { ProductionByMonthGraphComponent } from './production-by-month-graph/production-by-month-graph.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    Graph2Component,
    Graph3Component,
    GraphNativeComponent,
    ProductionByWeekGraphComponent,
    ProductionByMonthGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
