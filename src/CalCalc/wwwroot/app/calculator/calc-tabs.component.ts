import { Component, OnInit } from '@angular/core';
import { Tab } from './tab';
import { FluidInfusionsComponent } from '../fluid-infusions/fluid-infusions.component';
import { ParenteralNutritionComponent } from '../fluid-infusions/parenteral-nutrition.component';
import { CalculatorService } from './calculator.service'
import { DextroseConcentration } from '../fluid-infusions/dextrose-concentration'

@Component({    
    selector: 'calc-tabs',
    templateUrl: '/app/calculator/calc-tabs.component.html',
    directives: [FluidInfusionsComponent, ParenteralNutritionComponent],
    providers: [CalculatorService]
})

export class CalcTabsComponent implements OnInit {
    public activeTab :string;
    public tabs: Tab[];
    public dextroseConcentrations: DextroseConcentration[];
    _calcService: CalculatorService;
    
    constructor(calculatorService: CalculatorService) {
        this._calcService = calculatorService;
     }

    ngOnInit() { 
        this.tabs = [{ "title": "Fluid Infusions", "active": true },
            { "title": "Parenteral Nutrition", "active": false },
            { "title": "Enteral Nutrition", "active": false },
            { "title": "Additives", "active": false },
            { "title": "Other Nutrition", "active": false }];
        this.activeTab = "Fluid Infusions";

        this._calcService.getDextroseConecntrations()
            .subscribe(dex => this.dextroseConcentrations)
    }

    selectTab(tab: Tab) {
        this.tabs.forEach((tab) => tab.active = false);
        tab.active = true;
        this.activeTab = tab.title;
        console.log("tab select:", tab);
        console.log("active tab:", this.activeTab);
    }

}