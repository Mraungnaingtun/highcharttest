import { Component } from '@angular/core';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-combinations',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './combinations.component.html',
  styleUrl: './combinations.component.css'
})
export class CombinationsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {}


  //title
  title = 'Sale and Profit Combination Chart';

  //categories
  categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ];


  //data json format
  data =[
    {
      type: 'column',
      name: 'Sales',
      data: [90, 20, 30, 40, 50, 60, 30],
      color: '#7cb5ec',
    },
    {
      type: 'line',
      name: 'Profit',
      data: [90, 15, 25, 35, 45, 95, 65],
      color: '#434348',
      yAxis: 1,
    }
  ] as SeriesOptionsType[];


  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: this.title
      },
      xAxis: {
        categories: this.categories,
        title: {
          text: 'Month'
        }
      },
      yAxis: [
        {
          title: {
            text: 'Sales'
          },
          stackLabels: {
            enabled: true,
          },
        },
        {
          title: {
            text: 'Profit'
          },
          opposite: true,
        }
      ],
      series: this.data,
      plotOptions: {
        column: {
          stacking: 'normal',
        },
        line: {
          marker: {
            enabled: true,
          },
        },
      },
    };
  }

}
