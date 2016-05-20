import {Component, EventEmitter, Output, Input} from '@angular/core';
import {SubjectService, Subject} from "./subject.service";
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
@Component({
    selector: 'subject-selector',
    directives: [ROUTER_DIRECTIVES],
    template:`<div>
        <span>Select subject: </span> &nbsp;
        <select #sel (change)="select.emit(sel.value)">
            <option *ngFor="let subject of subjects" [value] = subject.id>
                {{subject.subjectId}}
            </option>
        </select>
            
        &nbsp;<span>or create new subject:</span>
        <a class= "btn btn-sm" [routerLink]="['SubjectsNew']" >New Subject</a>
    </div>`
})
export class SubjectSelector {
    @Output() select: any = new EventEmitter();
    //@Output() newSub: EventEmitter<string> = new EventEmitter();
    @Input() subjects: Subject[];
    errorMessage: string;

    constructor(){
        
    }

    //onNewSub(): void {
    //    console.log('onNewSub'); 
    //    this.newSub.emit('');       
    //}
    
    
}