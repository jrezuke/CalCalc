import { Component, OnInit } from '@angular/core';
import { CalculatorTabComponent } from './calc-tab.component'
@Component({    
    selector: 'calc-tabs',
    templateUrl: '/app/calculator/calc-tabs.component.html'
})
export class CalcTabsComponent implements OnInit {
    public activeTab :string;
    public tabs :CalculatorTabComponent[];
    
    constructor() { }

    ngOnInit() { }

}