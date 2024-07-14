import { Component } from '@angular/core';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-piechart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.css'
})
export class PiechartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';


   //title
   title = 'Customer Distribution by Sex';

   //categories
   categories = ['CurrentAccount', 'SavingAccount', 'LoanAccount'];
 
   //data json format
   data = [
    {
      type: 'pie',
      name: 'Gender',
      data: [
        { name: 'Male', y: 60, color: '#1f77b4' },
        { name: 'Female', y: 30, color: '#4CAF50' },
        { name: 'Other', y: 10, color: '#FFEB3B' },
      ],
    }
  ] as SeriesOptionsType[];

     
  chartOptions: Highcharts.Options ={}


  ngOnInit() {
    this.chartOptions = {
        chart: {
          type: 'pie',
        },
        title: {
          text: this.title,
        },
        series: this.data,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              format: '{point.name}: {point.y}%',
              style: {
                color: '#333'
              }
            },
          },
        },
      };
  }
  
}
