import { Component, Input, OnInit } from '@angular/core';

import { PopularStat } from '../../models/popular-stat';
import { ChartsService } from '../../services/charts.service';
import { StatsService } from '../../services/stats.service';

@Component({
    selector: 'popular-stats',
    templateUrl: './popular-stats.component.html',
    styleUrls: ['./popular-stats.component.scss']
})
export class PopularStatsComponent implements OnInit {
    @Input() stats;

    marketPrice: PopularStat;
    avgBlockSize: PopularStat;
    transPerDay: PopularStat;
    mempoolSize: PopularStat;
    popularStats: Array<PopularStat> = [];

    constructor(
        private chartsService: ChartsService,
        private statsService: StatsService,
    ) { }

    ngOnInit() {
        this.loadStats();

        this.popularStats = [
            this.marketPrice,
            this.avgBlockSize,
            this.transPerDay,
            this.mempoolSize,
        ];
    }

    loadStats() {
        const params = {
            cors: true,
        };

        this.statsService.getStats(params)
        .subscribe(
            result => {
                const res = result.json();
                const price = new PopularStat(
                    'Market Price',
                    res.market_price_usd,
                    'Average USD market price across major bitcoin exchanges.',
                    'USD',
                );

                const trans = new PopularStat(
                    'Daily Transactions',
                    res.n_tx,
                    'The aggregate number of confirmed Bitcoin transactions in the past 24 hours.'
                )

                this.popularStats[0] = price;
                this.popularStats[1] = trans;
            },
            error => {
                console.log(error);
            }
        );

        this.statsService.getAvgBlockSize(params)
        .subscribe(
            result => {
                const res = result.json();
                const block = new PopularStat(
                    'Avg Block Size',
                    res,
                    'The 24 hour average block size.',
                    'MB',
                );

                this.popularStats[2] = block;
            },
            error => {
                console.log(error);
            }
        );

        const mempoolParams = {
            timespan: '1days',
            cors: true,
        };

        this.chartsService.getChartData('mempool-size', mempoolParams)
        .subscribe(
            result => {
                const res = result.json();
                const mempool = new PopularStat(
                    res.name,
                    res.values[res.values.length - 1].y,
                    res.description,
                    res.unit,
                );

                this.popularStats[3] = mempool;
            },
            error => {
                console.log(error);
            }
        );
    }
}
