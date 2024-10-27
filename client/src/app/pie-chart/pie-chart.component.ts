import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts'; // Import NgxChartsModule

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css',
})
export class PieChartComponent {
  @Input() data: any;

  ngOnInit(): void {
    console.log('Pie Chart Data:', this.data);
    this.formatChartData();

    // Use a chart library like Chart.js or ngx-charts to render the pie chart using this.data
  }
  chartData: any[] | undefined;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  formatChartData(): void {
    // Format the input data to match ngx-charts pie chart data structure
    this.chartData = this.data.map((item: any) => ({
      name: item.assetType,
      value: item.percentage,
    }));
  }
}
