import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Tabs } from './tabs.constant';

import { CurrencyStatsComponent } from './currency-stats/currency-stats.component';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { MiningInfoComponent } from './mining-info/mining-info.component';
import { NetworkActivityComponent } from './network-activity/network-activity.component';

const routes: Routes = [
    {
        path: Tabs.CURRENCY_STATS.url,
        component: CurrencyStatsComponent,
    },
    {
        path: Tabs.BLOCK_DETAILS.url,
        component: BlockDetailsComponent,
    },
    {
        path: Tabs.MINING_INFO.url,
        component: MiningInfoComponent,
    },
    {
        path: Tabs.NETWORK_ACTIVITY.url,
        component: NetworkActivityComponent,
    },
    {
        path: '**',
        redirectTo: Tabs.CURRENCY_STATS.url,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})

export class TabsRoutingModule {}