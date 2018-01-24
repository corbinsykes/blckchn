import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { CurrencyStatsComponent } from './currency-stats/currency-stats.component';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { MiningInfoComponent } from './mining-info/mining-info.component';
import { NetworkActivityComponent } from './network-activity/network-activity.component';
import { ChartComponent } from '../chart/chart.component';

@NgModule({
    exports: [TabsComponent],
    declarations: [
        TabsComponent,
        CurrencyStatsComponent,
        BlockDetailsComponent,
        MiningInfoComponent,
        NetworkActivityComponent,
        ChartComponent,
    ],
    imports: [
        CommonModule,
        TabsRoutingModule,
        ChartsModule,
    ],
    providers: [ ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TabsModule {}