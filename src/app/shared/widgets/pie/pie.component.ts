import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import darkTheme from 'highcharts/themes/dark-unica';
import { ShareDataService } from 'src/app/share-data.service';
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent {
  Highcharts = Highcharts;
  chartOptions: {} | any;
  isDarkTheme = false;
  @Input() data = [];

  constructor(private shareDataService: ShareDataService) {}

  ngOnInit() {
    this.shareDataService.subject.subscribe((isDarkMode) => {
      if (isDarkMode) {
        this.isDarkTheme = true;
        darkTheme(Highcharts);
        const theme2 = {
          chart: {
            type: 'area',
            backgroundColor: '#424242',
            fill: '#424242',
          },
        };
        Highcharts.setOptions(theme2);
      } else {
        this.isDarkTheme = false;
        const theme2 = {
          chart: {
            type: 'area',
            backgroundColor: '#ffffff',
            fill: '#ffffff',
          },
        };
        Highcharts.setOptions(theme2);
      }
    });
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Random Data',
        align: 'left',
      },
      colors: [
        '#009688',
        '#ffff75',
        '#c234fa',
        '#8dddfc',
        '#f786d7',
        '#67cfc5',
        '#ffff75',
        '#fcba1e',
      ],

      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: this.data,
        },
      ],
    };

    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
