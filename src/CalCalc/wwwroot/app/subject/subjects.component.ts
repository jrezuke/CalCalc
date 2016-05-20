import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'subjects-component',
    templateUrl: 'app/subject/subjects.component.html'
})


    
export class SubjectsComponent implements OnInit {

    constructor() { }

    ngOnInit() { console.log('subjects component onInit') }
}