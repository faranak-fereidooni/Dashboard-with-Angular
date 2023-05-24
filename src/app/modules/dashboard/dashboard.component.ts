import { Component, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  bigChart:any = [];
  cards:any = [];
  pieCharts:any = [];

constructor(private dashboardService:DashboardService){}

ngOnInit(){
  this.bigChart = this.dashboardService.bigChart();
  this.cards = this.dashboardService.cards();
  this.pieCharts = this.dashboardService.pieCharts();
}

}
