import { Component, OnInit } from '@angular/core';

import { Currency } from '../../models/currency';
import { PopularStat } from '../../models/popular-stat';
import { StatsService } from '../../services/stats.service';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    currencies: Array<Currency>;
    activeCurrency: Currency;
    marketPrice;
    showCurrencies: boolean = false;

    constructor(
        private statsService: StatsService,
        private currencyService: CurrencyService,
    ) {}

    ngOnInit() {
        this.getCurrentPrice();
        this.getExchangeRates();
    }

    getExchangeRates() {
        this.currencyService.getExchangeRates()
        .subscribe(
            result => {
                const rates = result.json().rates;
                let aud, cad, cny, eur, gbp, jpy, usd;

                aud = new Currency('Australian Dollar', 'AUD', rates.AUD, '/assets/aud.svg');
                cad = new Currency('Canadian Dollar', 'CAD', rates.CAD, '/assets/cad.svg');
                cny = new Currency('Renminbi', 'CNY', rates.CNY, '/assets/cny.svg');
                eur = new Currency('Euro', 'EUR', rates.EUR, '/assets/eur.svg');
                gbp = new Currency('Pound Sterling', 'GBP', rates.GBP, '/assets/gbp.svg');
                jpy = new Currency('Japanese Yen', 'JPY', rates.JPY, '/assets/jpy.svg');
                usd = new Currency('United States Dollar', 'USD', 1, '/assets/usd.svg');

                this.currencies = [usd, eur, jpy, gbp, aud, cad, cny];
                this.activeCurrency = this.currencies[0];
            }
        )
    }

    getCurrentPrice() {
        const params = {
            cors: true,
        };

        this.statsService.getStats(params)
        .subscribe(
            result => {
                const res = result.json();
                this.marketPrice = new PopularStat(
                    'Market Price',
                    res.market_price_usd,
                    'Average USD market price across major bitcoin exchanges.',
                    'USD',
                );
            },
            error => {
                console.log(error);
            }
        );
    }

    toggleCurrencyDropdown() {
        this.showCurrencies = !this.showCurrencies;
    }

    exchangeCurrency(currency) {
        this.activeCurrency = currency;
    }
}
