import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PopularStatsComponent } from './components/popular-stats/popular-stats.component';

import { ChartsService } from './services/charts.service';
import { CurrencyService } from './services/currency.service';
import { StatsService } from './services/stats.service';
import { TabsModule } from './components/tabs';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        PopularStatsComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        TabsModule,
    ],
    providers: [
        StatsService,
        ChartsService,
        CurrencyService,
    ],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
