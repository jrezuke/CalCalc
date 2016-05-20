import {Component, OnInit} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {SubjectsListComponent} from './subjects-list.component'
import {SubjectNewComponent} from './subject.new.component';

@Component({ 
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Subjects', component: SubjectsListComponent, useAsDefault: true },
    { path: '/new', name: 'SubjectNew', component: SubjectNewComponent}
    //{ path: '/list/:id', name: 'Vehicles', component: VehicleListComponent	},
	//{ path: '/:id', name: 'Vehicle', component: VehicleComponent }
])
export class SubjectsManagerComponent implements OnInit {

    constructor() { }

    ngOnInit() { console.log('subjects manager component onInit')}
}