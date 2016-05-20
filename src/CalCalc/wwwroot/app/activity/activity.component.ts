import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'selector',
    templateUrl: 'app/activity/activity.component.html'
})

export class ActivityComponent implements OnInit {

    constructor() { }

    ngOnInit() { console.log('activity component onInit')}
}