import {Component, OnInit} from '@angular/core';
import {SubjectService, Subject} from './subject.service'
@Component({
    selector: "subject-list",
    templateUrl: "app/subject/subjects-list.component.html"
})  

export class SubjectsListComponent implements OnInit{
    public subjects: Subject[];
    public errorMessage: any;
    _subjectService: SubjectService;
    
    constructor(subjectService: SubjectService) {
        this._subjectService = subjectService;
     }

    ngOnInit(): void {
        this._subjectService.getSubjects()
            .subscribe(
            subjects => this.subjects = subjects,
            error => this.errorMessage = <any>error);        
    }
} 