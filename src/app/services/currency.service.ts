import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CurrencyService {
    private endpoint = 'https://api.fixer.io/latest?base=USD';

    constructor(private http: Http) {}

    getExchangeRates() {
        return this.http.get(`${this.endpoint}`);
    }

}
