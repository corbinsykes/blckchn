import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChartsService {
    private endpoint = 'https://api.blockchain.info/charts';

    constructor(private http: Http) {}

    getChartData(chart, params) {
        return this.http.get(`${this.endpoint}/${chart}`, {params});
    }

    formatDataset(dataset) {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        const xValues = [];
        const yValues = [{
            data: [],
            pointRadius: 0,
        }];

        for (let val of dataset) {
            const d = new Date(val.x * 1000);
            const date = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear().toString().substr(-2)}`
            xValues.push(date);
            yValues[0].data.push(val.y);
        }

        return {
            xValues,
            yValues
        };
    }
}
