import { Component,Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  chartOptions :{} | any;
  Highcharts=Highcharts;
  @Input() label:string | undefined;
  @Input() total:string | undefined;
  @Input() percentage:string | undefined;
  @Input() data = [];
  constructor(){}
  ngOnInit() {
    this.chartOptions=
   {
    chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth:0,
        margin:[2,2,2,2],
        height:60
    },
    colors :['#acfab5' ],
    title: {
        text: null,
        align: 'left'
    },
    subtitle: {
        text: null,
    },
    tooltip: {
        split: true,
        outside: true
    },
    legend:{
      enabled:false
    },
    credits:{
      enabled:false
    },
    exporting:{
      enabled:false
    },
    xAxis: {
      labels:{
        enebled:false
      },
      title:{
        text:null
      },
      
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
    },
    yAxis: {
      labels:{
        enebled:false
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
    },
    series: [{data:this.data}],
    responsive: {  
      rules: [{  
        condition: {  
          maxWidth: 500,
          callback(){
            return true;
          }  
        },  
        chartOptions: {  
          legend: {  
            enabled: false  
          },
        }  
      }]  
    }
};
HC_exporting(Highcharts);
  setTimeout(()=>{
  window.dispatchEvent(new Event('resize'));
}, 300)
  }
  
}
