import { Component } from '@angular/core';
import { HomeComponent} from './home/home.component';
import { ActivityManagerComponent} from './activity/activity.manager.component';
import { SubjectsManagerComponent} from './subject/subjects.manager.component';
import {SubjectNewComponent} from './subject/subject.new.component';
import {SubjectsListComponent} from './subject/subjects-list.component';
import {SiteNewComponent} from './sites/site.new.component';
import { SubjectSelector} from './subject/subject.selector';
import {SubjectService} from './subject/subject.service';
import {SiteService} from './sites/site.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { EntryNewComponent} from './activity/entry.new.component';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
    selector: 'cal-calc',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, SiteService, SubjectService],
    template: `<h1>Calorie Calculator</h1>
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>Calorie Calculator</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/Home']">Home</a></li>
                        <li><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Calculator <span class="caret"></span></a> 
                            <ul class="dropdown-menu">
                                <li><a [routerLink]="['/EntryNew']">New Entry</a></li>
                                <li><a [routerLink]="['/Calculator/']">Calculator</a></li>                                
                            </ul>
                        </li>
                        <li><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"   aria-expanded="false">Subjects <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a [routerLink]="['/Subjects']">Subjects list</a></li>
                                <li><a [routerLink]="['/SubjectsNew']">Add new subject</a></li>                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>         
    `
})
@RouteConfig([    
    { path: '/', name:'Home', component: HomeComponent},
    { path: '/entry/new', name:'EntryNew', component: EntryNewComponent },
    { path: '/subjects', name:'Subjects', component: SubjectsListComponent },
    { path: '/subjects/new', name:'SubjectsNew', component: SubjectNewComponent },
    { path: '/sites/new', name:'SitesNew', component: SiteNewComponent },
    { path: '/calculator/...', name:'Calculator', component: CalculatorComponent }
    


])   
//@RouteConfig([
//    { path: '/', name: 'root', redirectTo: ['/Home'] },
//    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
//    { path: '/activity/...', name: 'Activity', component: ActivityManagerComponent },
//    { path: '/subjects/...', name: 'Subjects', component: SubjectsManagerComponent }
    
    
//])   


export class AppComponent{}