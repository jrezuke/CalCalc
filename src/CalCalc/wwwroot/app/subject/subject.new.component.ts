import {Component, OnInit} from '@angular/core';
import {SiteSelector} from '../sites/site.selector'
import {SiteService, ISite} from '../sites/site.service';
import {SubjectService, Subject} from './subject.service';
import { NgForm }    from '@angular/common';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router} from '@angular/router-deprecated';

@Component({
    selector: 'subject-new',
    templateUrl: 'app/subject/subject.new.component.html',
    directives: [SiteSelector]
})

export class SubjectNewComponent implements OnInit {
    public sites: ISite[];
    public errorMessage: any;
    public subjectNew: Subject;
    public subjecJson: any;
    
    _siteService: SiteService;
    _subjectService: SubjectService;
    _router: Router;

    constructor(siteService: SiteService, subjectService:SubjectService, router:Router) {
        this._siteService = siteService;
        this._subjectService = subjectService;
        this._router = router;
    }
    
    ngOnInit(): void {
        console.log('subject new component');
        this._siteService.getSites()
            .subscribe(
            sites => this.sites = sites,
            error => this.errorMessage = <any>error);
        this.subjectNew = new Subject();
        this.subjectNew.siteId = 1;
        this.subjecJson = JSON.stringify(this.subjectNew);
    }

    onSelect(siteId: number): void {
        console.log("select", siteId);
        this.subjectNew.siteId = siteId;
        console.log("new subject", this.subjectNew);
        //this.selectedSubject = getSubject(subjectId);
    }

    //get diagnostic() {
    //    return JSON.stringify(this.model);
    //}

    onSubmit() {
        console.log("onsubmit", this.subjectNew);
        //
        this._subjectService.addSubject(this.subjectNew)
            .subscribe(
            subject => this.subjectNew = subject,
            error => console.log("error", error));

        this._router.navigate(['/Subjects']);          
    }
}