import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-barcharttest',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './barcharttest.component.html',
  styleUrl: './barcharttest.component.css'
})
export class BarcharttestComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {}
  series: any;

  //title
  title = 'Types of Accounts in Branches';

  //categories
  categories = ['CurrentAccount', 'SavingAccount', 'LoanAccount'];

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Bar Chart Example'
      },
      xAxis: {
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total Amount'
        }
      },
      series: this.series
    };

  }

  ngAfterViewInit(): void {
    this.getseries()
    console.log("hi there")
  }



  getseries() {
    this.series = [
      {
        "name": "Series 1",
        "type": "column",
        "data": [
          2749,
          2205,
          2805,
          1
        ]
      },
      {
        "name": "Series 2",
        "type": "column",
        "data": [
          3604,
          973,
          804
        ]
      },
      {
        "name": "Series 3",
        "type": "column",
        "data": [
          45,
          12,
          38
        ]
      },
      {
        "name": "Series 4",
        "type": "column",
        "data": [
          168,
          21,
          12
        ]
      },
      {
        "name": "Series 5",
        "type": "column",
        "data": [
          182,
          94,
          118
        ]
      }
    ]

  }



}
