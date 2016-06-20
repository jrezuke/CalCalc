import { Component, OnInit } from '@angular/core';

export class resultSummary{
    public cho: number;
    public protein: number;
    public lipid: number;
}

@Component({
    selector: 'calc-results',
    templateUrl: 'app/calculator/calc-results.component.html'
})
export class CalcResultsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}