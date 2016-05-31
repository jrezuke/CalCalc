import { Component, OnInit, Input } from '@angular/core';
import { DextroseConcentration } from '../fluid-infusions/dextrose-concentration'
import { CalculatorService } from '../calculator/calculator.service'

@Component({
    selector: 'fluid-infusions',
    templateUrl: 'app/fluid-infusions/fluid-infusions.component.html'
})

export class FluidInfusionsComponent implements OnInit {
    public dextroseConcentrations: DextroseConcentration[];  
    _calcService: CalculatorService;
    
    constructor(calculatorService: CalculatorService) {
        this._calcService = calculatorService;
        console.log("dexCons-ctor:", this.dextroseConcentrations)
     }

    ngOnInit() {
        this._calcService.getDextroseConecntrations()
            .subscribe(dex => this.dextroseConcentrations);

        console.log("dexCons-onInit:", this.dextroseConcentrations)
     }

}