import { Component, OnInit } from '@angular/core';

@Component({    
    selector: 'calc-tabs',
    templateUrl: '/app/calculator/calc-tabs.component.html'
})
export class CalcTabsComponent implements OnInit {
    public: string activeTab;
    
    constructor() { }

    ngOnInit() { }

}