import { Component, OnInit } from '@angular/core';

@Component({    
    selector: 'calc-tab',
    templateUrl: 'app/calculator/calc-tab.component.html'
})
export class CalculatorTabComponent implements OnInit {
    title: string;
    active: bool = false;
    
    constructor() { }

    ngOnInit() { }

}