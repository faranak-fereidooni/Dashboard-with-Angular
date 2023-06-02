import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import darkTheme from 'highcharts/themes/dark-unica';
import { ShareDataService } from 'src/app/share-data.service';

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
        const theme1 = {
          chart: {
            type: 'area',
            backgroundColor: '#424242',
            fill: '#424242',
            color: 'white',
          },
        };
        Highcharts.setOptions(theme1);
      } else {
        this.isDarkTheme = false;
        const theme2 = {
          chart: {
            type: 'area',
            backgroundColor: '#ffffff',
            fill: '#ffffff',
            color: '#424242',
          },
        };
        Highcharts.setOptions(theme2);
      }
    });
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Random Data',
        align: 'left',
      },
      colors: ['#acfab5', '#f7bbfc', '#39ddfa', '#ffff75', '#a3f7f0'],
      subtitle: {
        text: 'Demo',
        align: 'left',
      },
      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size:12px"><b>{point.key}</b></span><br>',
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      accessibility: {
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
