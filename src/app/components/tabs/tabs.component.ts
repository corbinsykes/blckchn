import { Component, OnInit } from '@angular/core';

import { Tabs } from './tabs.constant';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit {
    tabsConstant = Tabs;
    tabs: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.tabs.push(
            this.tabsConstant.CURRENCY_STATS,
            this.tabsConstant.BLOCK_DETAILS,
            this.tabsConstant.MINING_INFO,
            this.tabsConstant.NETWORK_ACTIVITY,
        );

        this.tabsConstant.ACTIVE = this.tabsConstant.CURRENCY_STATS;
    }

    activate(tab) {
        this.tabsConstant.ACTIVE = tab;
    }
}
