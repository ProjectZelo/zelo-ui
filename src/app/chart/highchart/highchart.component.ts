import { Component, OnInit } from '@angular/core';
import { Chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.scss']
})
export class HighchartComponent implements OnInit {
  chart: Chart;
  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart() {
    const series = this.setSeriesData();
    this.setContainer(series);
  }

  setSeriesData() {
    return [{
      type: 'line',
      name: 'name1',
      data: [176, 487, 75, 757, 868, 889],
      color: '#97C3C9',
    },
    {
      type: 'line',
      name: 'name2',
      data: [173, 447, 578, 775, 888, 988],
      color: '#97C3C9',
    },

    ];

  }

  setContainer(series: Array<any>) {
    Highcharts.chart('container', {


      chart: {
        backgroundColor: 'transparent'
      },
      title: {
        text: undefined
      },

      credits: {
        enabled: false
      },
      xAxis: {
        visible: true,
        tickLength: 0,
      },
      yAxis: {
        allowDecimals: false,
        visible: true,
        lineWidth: 1,
        gridLineColor: 'transparent',
        min: 0,
        title: {
          text: 'label'
        }
      },
      legend: {
        itemMarginTop: 16,
        itemStyle: {
          color: '#dee0e3'
        },

      },
      tooltip: {
        shared: true,
        borderRadius: 10
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          pointPadding: 1
        }
      },

      series: series,
      responsive: {
        rules: [{
          condition: {
            maxWidth: 50
          },

        }]
      }
    })

  }

}
