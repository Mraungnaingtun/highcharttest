import { AfterViewInit, Component,ChangeDetectorRef  } from '@angular/core';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import { ApiService } from '../../service/ApiService';
import { firstValueFrom } from 'rxjs';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-barchart-dynamic-data',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './barchart-dynamic-data.component.html',
  styleUrl: './barchart-dynamic-data.component.css'
})
export class BarchartDynamicDataComponent {
  [x: string]: any;

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  updateFlag = false;


  response = [
    { "name": "", "data": [], "type": "" },
  ] as unknown as SeriesOptionsType[];


  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Dynamic Bar Chart Test'
    },
    xAxis: {
      categories: ["First", "Second", "Third"]
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    series:[]
  }

  constructor(private apiservice: ApiService,private cdr: ChangeDetectorRef) { }
  

  ngOnInit() {
    this.fillData();
  }

  async fillData() {
    await this.getData();
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Dynamic Bar Chart Test'
      },
      xAxis: {
        categories: ["First", "Second", "Third"]
      },
      yAxis: {
        title: {
          text: 'Values'
        }
      },
      series:this.response
    
    };
    this.updateFlag = true;
    this.cdr.detectChanges();
    console.log("Pushed data === > "+ this.chartOptions.series);
  }

  async getData() {
    try {
      const responseData = await firstValueFrom(this.apiservice.getRequest("/api/simple-json"));
      this.response = responseData;
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

}
