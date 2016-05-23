import { Component, OnInit } from '@angular/core';
import { CalculatorTabComponent } from './calc-tab.component'
import { Tab } from './tab',
import { FluidInfusionsComponent } from '../fluid-infusions/fluid-infusions.component';
import { ParenteralNutritionComponent } from '../fluid-infusions/parenteral-nutrition.component';
@Component({    
    selector: 'calc-tabs',
    templateUrl: '/app/calculator/calc-tabs.component.html',
    directives: [FluidInfusionsComponent, ParenteralNutritionComponent]
})
export class CalcTabsComponent implements OnInit {
    public activeTab :string;
    public tabs: Tab[];
    public activeTab: string;
    
    constructor() { }

    ngOnInit() { 
        this.tabs = [{ "title": "Fluid Infusions", "active": true },
            { "title": "Parenteral Nutrition", "active": false },
            { "title": "Enteral Nutrition", "active": false },
            { "title": "Additives", "active": false },
            { "title": "Other Nutrition", "active": false }];
        this.activeTab = "Fluid Infusions";
    }

    selectTab(tab: tab) {
        this.tabs.forEach((tab) => tab.active = false);
        tab.active = true;
        this.activeTab = tab.title;
        console.log("tab select:", tab);
        console.log("active tab:", this.activeTab);
    }

}