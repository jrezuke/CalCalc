import { Component, OnInit } from '@angular/core';
import { CalcEntryInfoComponent } from './calc-entry-info.component'
import { CalcTabsComponent } from './calc-tabs.component'

@Component({
    selector: 'calc-entry-shell',
    templateUrl: 'app/calculator/calc-entry-shell.component.html',
    directives: [CalcEntryInfoComponent, CalcTabsComponent]
})
export class CalcEntryShellComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}