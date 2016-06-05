import { Component, OnInit, Input } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { DextroseConcentration } from '../fluid-infusions/dextrose-concentration'
//import { CalculatorService } from '../calculator/calculator.service'

@Component({
    selector: 'fluid-infusions',
    templateUrl: 'app/fluid-infusions/fluid-infusions.component.html',
    directives: [FORM_DIRECTIVES]
    //providers: [CalculatorService]
})

export class FluidInfusionsComponent implements OnInit {
    @Input() dextroseConcentrations: DextroseConcentration[];  
    //_calcService: CalculatorService;
    dexconCurrent: DextroseConcentration;
    
    constructor() {
        // this._calcService = calculatorService;
        // console.log("dexCons-ctor:", this.dextroseConcentrations)
     }

    onSubmit() {
        console.log("onSubmit: ", this.dexconCurrent);
    } 
    
    ngOnInit() {
        // this._calcService.getDextroseConecntrations()
        //     .subscribe(
        //     dex => this.dextroseConcentrations = dex);

        // console.log("dexCons-onInit:", this.dextroseConcentrations)
     }

}