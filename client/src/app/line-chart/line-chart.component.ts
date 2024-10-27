import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  @Input() data: any;

  ngOnInit(): void {
    console.log('Line Chart Data:', this.data);
    // Use a chart library to render the line chart using this.data
  }
}
