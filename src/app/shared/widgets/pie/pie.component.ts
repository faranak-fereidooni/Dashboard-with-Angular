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
        const darkThemeOptions = {
          chart: {
            type: 'area',
            backgroundColor: '#424242',
            style:{
              font: '16px "Trebuchet MS", Verdana, sans-serif',
            },
          },
          
        };
        Highcharts.setOptions(darkThemeOptions);
        Highcharts.charts.forEach((chart) => {
          if (chart) {
            chart.update(darkThemeOptions);
          }
        });
      } else {
        this.isDarkTheme = false;
        const lightThemeOptions = {
          chart: {
            type: 'area',
            backgroundColor: '#ffffff',
            style:{
              font: '16px "Trebuchet MS", Verdana, sans-serif',
            },
          },
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
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        
      },
      title: {
        margin: 50,
        x: 27,
        y:40,
        text: 'RANDOM DATA',
        align: 'left',
        style: { font: 'bold 1.2em'},
      },
      colors: [
        '#acfab5',
        '#f7bbfc',
        '#39ddfa',
        '#ffff75',
        '#a3f7f0',
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
        enabled: false,
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
