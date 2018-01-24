import { Component, Input, OnInit } from '@angular/core';

import { ChartShortcuts } from './chart-shortcuts.constant';
import { Chart } from '../../models/chart';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
    @Input() endpoint;

    chartShortcuts = ChartShortcuts;
    activeShortcut;
    chart: Chart;
    chartDetail: Chart;
    showChartDetail: boolean = false;
    isDetailAvailable: boolean = false;

    constructor(private chartsService: ChartsService) {}

    ngOnInit() {
        this.activeShortcut = this.chartShortcuts[3];

        const params = {
            timespan: this.activeShortcut.timespan,
            cors: true
        }

        this.loadCharts(params, false);
    }

    loadCharts(params, fromDetail) {
        this.isDetailAvailable = false;
        this.resetChart();

        this.chartsService.getChartData(this.endpoint, params)
        .subscribe(
            result => {
                const res = result.json();

                if (!!fromDetail) {
                    this.chartDetail = new Chart(
                        res.name,
                        'line',
                        this.chartsService.formatDataset(res.values),
                        true
                    );

                    this.chart = new Chart(
                        this.chartDetail.title,
                        this.chartDetail.type,
                        {
                            xValues: this.chartDetail.xValues,
                            yValues: this.chartDetail.yValues
                        }

                    );
                } else {
                    this.chart = new Chart(
                        res.name,
                        'line',
                        this.chartsService.formatDataset(res.values)
                    );

                    this.chartDetail = new Chart(
                        this.chart.title,
                        this.chart.type,
                        {
                            xValues: this.chart.xValues,
                            yValues: this.chart.yValues
                        },
                        true
                    );
                }

                this.isDetailAvailable = true;
            }
        );
    }

    toggleChartDetail() {
        this.showChartDetail = !this.showChartDetail;
    }

    selectShortcut(shortcut) {
        this.activeShortcut = shortcut;

        const params = {
            timespan: shortcut.timespan,
            cors: true
        };

        this.loadCharts(params, true);
    }

    resetChart() {
        delete this.chart;
        delete this.chartDetail;
    }
}
