import {Component, OnInit} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { ActivityComponent} from './activity.component';
import { EntryNewComponent} from './entry.new.component';

@Component({
    selector: 'calc-manager',
    templateUrl: 'app/activity/activity.manager.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Activity', component: ActivityComponent, useAsDefault: true },
	{ path: '/entry/new', name: 'EntryNew', component: EntryNewComponent}
    //{ path: '/list/:id', name: 'Vehicles', component: VehicleListComponent	},
	//{ path: '/:id', name: 'Vehicle', component: VehicleComponent }
])
export class ActivityManagerComponent implements OnInit {

    constructor() { }

    ngOnInit() {console.log('activity manager component onInit') }
}

