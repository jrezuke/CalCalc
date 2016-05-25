import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';



export class Subject {
    id: number;
    subjectId: string;
    siteId: number;
}

@Injectable()
export class SubjectService {
    private _subjectUrl = 'http://localhost:3300/api/Subjects';

    constructor(private _http: Http) { }

    getSubjects(): Observable<Subject[]> {
        return this._http.get(this._subjectUrl)
            .map((response: Response) => <Subject[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }



    addSubject(subject: Subject): Observable<Subject> {
        let body = JSON.stringify(subject);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._subjectUrl, body, options )
             .map(this.extractData)
             .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error("error", error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        
            let body = res.json();
            return body.data || {};
        
        
    }
}