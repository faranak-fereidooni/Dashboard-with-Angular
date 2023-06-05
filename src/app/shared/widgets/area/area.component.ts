import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import darkTheme from 'highcharts/themes/dark-unica';
import { ShareDataService } from 'src/app/share-data.service';

interface ChartOptions extends Highcharts.Options {
  yAxis?: Highcharts.YAxisOptions;
}
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent {
  chartOptions: {} | any;
  Highcharts = Highcharts;
  isDarkTheme = false;
  @Input() data = [];

  constructor(private shareDataService: ShareDataService) {}

  ngOnInit() {
    this.shareDataService.subject.subscribe((isDarkMode) => {
      if (isDarkMode) {
        this.isDarkTheme = true;
        darkTheme(Highcharts);
        const darkThemeOptions: ChartOptions = {
          chart: {
            type: 'area',
            backgroundColor: '#424242',
          },
          title: {
            style: { color:'rgb(255, 255, 255)' },
          },
          subtitle: {
            style:{color:'rgb(255,255,255)'}
          },
          yAxis: {
            labels: {
              style: {
                color: 'white' 
              }
            },
            title: {
              style: {
                color: 'white' 
              },
            },
          },
          xAxis: {
            labels:{
            style:{
              backgroundColor: 'rgb(0,0,0)'}}}
        };
        Highcharts.setOptions(darkThemeOptions);
        Highcharts.charts.forEach((chart) => {
          if (chart) {
            chart.update(darkThemeOptions);
          }
        });
      } else {
        this.isDarkTheme = false;
        const lightThemeOptions: ChartOptions = {
          chart: {
            type: 'area',
            backgroundColor: '#ffffff'
          },
          title: {
            style: { color:'rgb(0, 0, 0)' },
          },
          subtitle: {
            style:{color:'rgb(0,0,0)'}
          },
          yAxis: {
            labels: {
              style: {
                color: '#000000' 
              }
            },
            title: {
              style: {
                color: '#000000' 
              },
            }
          },
          xAxis: {
            labels:{
            style:{
              backgroundColor: 'rgb(255,255,255)'}}}
        };
        Highcharts.setOptions(lightThemeOptions);
        Highcharts.charts.forEach((chart) => {
          if (chart) {
            chart.update(lightThemeOptions);
          }
        });
      }
    });

    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'RANDOM DATA',
        align: 'left',
        style: { font: 'bold 1.2em' },
      },
      subtitle: {
        text: 'Demo',
        align: 'left',
      },
      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size:12px"><b>{point.key}</b></span><br>',
      },
      colors: ['#acfab5', '#f7bbfc', '#39ddfa', '#ffff75', '#a3f7f0'],

      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          name: 'Ocean transport',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214],
        },
        {
          name: 'Households',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039],
        },
        {
          name: 'Agriculture and hunting',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913],
        },
        {
          name: 'Air transport',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550],
        },
        {
          name: 'Construction',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186],
        },
      ],
    };

    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
