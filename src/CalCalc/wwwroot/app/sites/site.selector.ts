import {Component, EventEmitter, Output, Input} from '@angular/core';
import {SiteService, ISite} from "./site.service";
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
@Component({
    selector: 'site-selector',
    directives: [ROUTER_DIRECTIVES],
    template:`<div>
        <span>Select site: </span> &nbsp;
        <select #sel (change)="select.emit(sel.value)">
            <option *ngFor="let site of sites" [value] = site.id>
                {{site.shortName}}
            </option>
        </select>
            
        &nbsp;<span>or create new subject:</span>
        <a class= "btn btn-sm" [routerLink]="['SitesNew']" >New Site</a>
    </div>`
})
export class SiteSelector {
    @Output() select: any = new EventEmitter();
    //@Output() newSub: EventEmitter<string> = new EventEmitter();
    @Input() sites: ISite[];
    errorMessage: string;

    constructor(){
        
    }

    //onNewSub(): void {
    //    console.log('onNewSub'); 
    //    this.newSub.emit('');       
    //}
    
    
}