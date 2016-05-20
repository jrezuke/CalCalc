import {Component, OnInit} from '@angular/core';
import {SubjectSelector} from '../subject/subject.selector'
import {SubjectService, Subject} from '../subject/subject.service';
import {Router, OnActivate} from '@angular/router-deprecated';

@Component({
    selector: 'caloric-entry-new',
    templateUrl: 'app/activity/entry.new.component.html',
    directives: [SubjectSelector]
})

export class EntryNewComponent implements OnInit, OnActivate {
    public subjects: Subject[];
    public errorMessage: any;
    _router: Router;
    _subjectService: SubjectService;

    //public selectedSubject: Subject = 0;

    constructor(subjectService: SubjectService, router: Router) {
        this._router = router;
        this._subjectService = subjectService;
    }
    routerOnActivate(curr: any): void {
        console.log("router onActivate:", curr);
    }

    ngOnInit(): void {
        console.log("router:",this._router);
        this._subjectService.getSubjects()
            .subscribe(
            subjects => this.subjects = subjects,
            error => this.errorMessage = <any>error);
    }

    onNewSub(event): void {
        console.log("newSub");
        //this._router.navigate(['SubjectNew']);
    }

    onSelect(subjectId: number): void {
        console.log("select", subjectId);
        //this.selectedSubject = getSubject(subjectId);
    }
}