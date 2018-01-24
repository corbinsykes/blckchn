import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StatsService {
    private endpoints = {
        stats: 'https://api.blockchain.info/stats',
        avg_block_size: 'https://api.blockchain.info/q/24hravgblocksize',
    }

    constructor(private http: Http) {}

    getStats(params) {
        return this.http.get(`${this.endpoints.stats}`, {params});
    }

    getAvgBlockSize(params) {
        return this.http.get(`${this.endpoints.avg_block_size}`, {params});
    }
}
