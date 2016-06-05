import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() select: any = new EventEmitter();

    //_calcService: CalculatorService;
    dexconCurrent: DextroseConcentration;
    volume: number;
    
    constructor() {
        // this._calcService = calculatorService;
        // console.log("dexCons-ctor:", this.dextroseConcentrations)
     }

    onSubmit() {
        console.log("onSubmit: ", this.dexconCurrent);
        console.log("volume: ", this.volume);
    } 

    onChange(dexcon: DextroseConcentration) {
        console.log(dexcon.id);
        console.log("dexconCurrent:" this.dexconCurrent);
        this.select.emit(dexcon)
    }
    
    ngOnInit() {
        // this._calcService.getDextroseConecntrations()
        //     .subscribe(
        //     dex => this.dextroseConcentrations = dex);

        // console.log("dexCons-onInit:", this.dextroseConcentrations)
     }

}