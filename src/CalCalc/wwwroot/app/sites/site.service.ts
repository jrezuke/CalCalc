import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface ISite {
    id: number;
    shortName: string;
    longName: string;
}

@Injectable()
export class SiteService {
    private _siteUrl = 'http://localhost:3300/api/Sites';

    constructor(private _http: Http) { }

    getSites(): Observable<ISite[]> {
        return this._http.get(this._siteUrl)
            .map((response: Response) => <ISite[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }       

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}