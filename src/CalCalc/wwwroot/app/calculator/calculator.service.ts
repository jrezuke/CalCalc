import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DextroseConcentration, FluidInfusion } from '../fluid-infusions/dextrose-concentration'

@Injectable()
export class CalculatorService{
    private _urlDextrose = 'http://localhost:3300/api/Dextrose';
    private _urlFluidInfusions = 'http://localhost:3300/api/FluidInfusions';
    public fluidInfusions: FluidInfusion[];

    constructor(private _http: Http) { }

    getFluidInfusions(): Observable<FluidInfusion[]>{
        return this._http.get(this._urlFluidInfusions)
            .map((response: Response) => <FluidInfusion[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    addFluidInfusion(fluidInfusion:FluidInfusion) {
        this.fluidInfusions.push(fluidInfusion);
    }

    getDextroseConecntrations(): Observable<DextroseConcentration[]> {
        return this._http.get(this._urlDextrose)
            .map((response: Response) => <DextroseConcentration[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error("error", error);
        return Observable.throw(error.json().error || 'Server error');
    }
}