import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexFill,
  ApexMarkers,
  ApexStroke,
  ApexTooltip,
  ApexLegend,
  NgApexchartsModule
} from "ng-apexcharts";

// Define correct type for ChartOptions
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis?: ApexYAxis; // Optional yaxis for some charts
  fill: ApexFill;
  stroke: ApexStroke;
  markers: ApexMarkers;
  colors: string[];
};

export type ChartOptionsFlood = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis[];
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  colors: string[];
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  legend: ApexLegend;
};

export type HurricaneChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  colors: string[];
  legend: ApexLegend;
  tooltip: ApexTooltip;
  fill: ApexFill;
};
@Component({
  selector: 'app-gui',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule], // Add CommonModule to imports
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.css']
})
export class GuiComponent {
  data: any;
  Earthquake: boolean = false;
  Flood: boolean = false;
  Hurricane: boolean = false;

  @ViewChild("chart") chart!: ChartComponent;
  public hurricaneChartOptions: Partial<HurricaneChartOptions>;
  public chartOptionsFlood: Partial<ChartOptionsFlood>;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state;

    this.hurricaneChartOptions = {
      series: [
        {
          name: 'Major Hurricane',
          data: [5, 6, 7, 8, 9, 10, 11, 12],
        },
        {
          name: 'Hurricane',
          data: [4, 5, 6, 5, 4, 6, 7, 8],
        },
        {
          name: 'Tropical Depression',
          data: [2, 3, 3, 4, 5, 4, 3, 5],
        },
        {
          name: 'Tropical Storm',
          data: [10, 9, 8, 7, 6, 5, 4, 3],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true, // Enable stacked bar chart
      },
      xaxis: {
        categories: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        title: {
          text: 'Year',
        },
      },
      yaxis: {
        title: {
          text: 'Total Breakdown of Storms',
        },
        min: 0,
        max: 30, // Adjust max based on total storms
      },
      dataLabels: {
        enabled: false, // Disable data labels for cleaner look
      },
      colors: ['#2E93fA', '#FF9800', '#E91E63', '#00E396'], // Custom colors for categories
      legend: {
        position: 'top', // Place the legend on top
        horizontalAlign: 'center',
      },
      tooltip: {
        shared: true, // Enable shared tooltips
        intersect: false,
      },
      fill: {
        opacity: 1, // Ensure full opacity for the stacked bars
      },
  }
    // Flood chart options with corrected typing
    this.chartOptionsFlood = {
      series: [
        {
          name: "Discharge (cumecs)", // Ensure name is correctly defined
          type: "line", // Ensure type is correctly defined
          data: [10, 12, 15, 30, 45, 40, 35, 25, 20, 15, 10] // Ensure data is correctly defined
        },
        {
          name: "Rainfall (mm)", // Ensure name is correctly defined
          type: "column", // Ensure type is correctly defined
          data: [15, 30, 45, 40, 35, 25, 20, 15, 10, 8, 5] // Ensure data is correctly defined
        }
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [3, 0]
      },
      xaxis: {
        categories: ['0', '6', '12', '18', '24', '30', '36', '42', '48', '54', '60']
      },
      yaxis: [
        {
          title: {
            text: "Discharge (cumecs)"
          },
          min: 0,
          max: 50,
          opposite: true
        },
        {
          title: {
            text: "Rainfall (mm)"
          },
          min: 0,
          max: 60
        }
      ],
      colors: ["#FF5733", "#33C0FF"],
      markers: {
        size: [5, 0],
        strokeWidth: 3,
        hover: {
          sizeOffset: 6
        }
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      legend: {
        position: "top",
        horizontalAlign: "right"
      }
    };

    // Line chart options with correct typing
    this.chartOptions1 = {
      series: [
        {
          name: "series1",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            185,
            {
              min: 30,
              max: 90
            }
          )
        }
      ],
      chart: {
        id: "chart2",
        type: "line",
        height: 230,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      colors: ["#546E7A"],
      stroke: {
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime"
      }
    };

    // Area chart options with correct typing
    this.chartOptions2 = {
      series: [
        {
          name: "series1",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            185,
            {
              min: 30,
              max: 90
            }
          )
        }
      ],
      chart: {
        id: "chart1",
        height: 130,
        type: "area",
        brush: {
          target: "chart2",
          enabled: true
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("19 Jun 2017").getTime(),
            max: new Date("14 Aug 2017").getTime()
          }
        }
      },
      colors: ["#008FFB"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1
        }
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false
        }
      }
    };
  }

  ngOnInit() {
    if (this.data?.data === 'Earthquake') {
      this.Earthquake = true;
    } else if (this.data?.data === 'Flood') {
      this.Flood = true;
    } else if (this.data?.data === 'Hurricane') {
      this.Hurricane = true;
    }
  }

  public generateDayWiseTimeSeries(baseval: number, count: number, yrange: any) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
      baseval += 86400000; // Increment by one day
      i++;
    }
    return series;
  }
}
