import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { CalcEntryShellComponent } from './calc-entry-shell.component';
import { EntryNewComponent } from '../activity/entry.new.component';

@Component({    
    selector: 'calc-root',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

    @RouteConfig([
        { path: '/', name: 'Calculator', component: CalcEntryShellComponent, useAsDefault: true },
        { path: '/new', name: 'CalcNew', component: EntryNewComponent }   
])

export class CalculatorComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}