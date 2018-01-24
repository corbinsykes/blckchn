import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-stats',
  templateUrl: './currency-stats.component.html',
  styleUrls: ['./currency-stats.component.scss']
})
export class CurrencyStatsComponent {
    charts = [
        'total-bitcoins',
        'market-price',
        'market-cap',
        'trade-volume'
    ]

    constructor() {}
}
