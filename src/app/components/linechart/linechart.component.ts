import { Component } from '@angular/core';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-linechart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.css'
})
export class LinechartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {};
    //title
    title = 'Branch Transaction Performance';

    //categories
    categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

     //data json format
    data = [
      {
        name: 'Branch 1',
        type: 'line',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      },
      {
        name: 'Branch 2',
        type: 'line',
        data: [45.0, 59.0, 67.0, 91.0, 113.0, 154.0, 93.0, 115.0, 135.0, 160.0, 88.0, 50.0]
      },
      {
        name: 'Branch 3',
        type: 'line',
        data: [34.0, 56.0, 77.0, 112.0, 132.0, 144.0, 122.0, 140.0, 160.0, 190.0, 102.0, 60.0]
      }
    ] as  SeriesOptionsType[];


    ngOnInit() {
      this.chartOptions  = {
        title: {
          text: this.title
        },
        xAxis: {
          categories: this.categories,
          title: {
            text: 'Month'
          }
        },
        yAxis: {
          title: {
            text: 'Amount'
          }
        },
        series: this.data
      };
    
  }

  
}
