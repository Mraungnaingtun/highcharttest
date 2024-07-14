import { Component } from '@angular/core';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import Accessibility from 'highcharts/modules/accessibility';
Accessibility(Highcharts);

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  loading = true;

  //title
  title = 'Types of Accounts in Branches';

  //categories
  categories = ['CurrentAccount', 'SavingAccount', 'LoanAccount'];

 //data json format
  data = [
    { "name": "Branch 1", "data": [200,321,400], "type":"column" },
    { "name": "Branch 2", "data": [71,100,300] , "type":"column" },
    { "name": "Branch 3", "data": [106,200,300] , "type":"column" }
    ] as SeriesOptionsType[];

  chartOptions: Highcharts.Options = {};


  ngOnInit() {

      console.log(this.data);
      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: this.title
        },
        xAxis: {
          categories: this.categories
        },
        yAxis: {
          title: {
            text: 'Values'
          }
        },
        series: this.data
      };
    
  }
  
}
