import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { MetricCardComponent } from '../metric-card/metric-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LineChartComponent,PieChartComponent,MetricCardComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dashboard: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/dashboard.json').subscribe((data:any) => {
      this.dashboard = data['dashboard'];
      console.log(this.dashboard)
    });
  }
}
