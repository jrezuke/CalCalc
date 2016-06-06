import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { DextroseConcentration, AddedDextroseConcentration } from '../fluid-infusions/dextrose-concentration'
//import { CalculatorService } from '../calculator/calculator.service'

@Component({
    selector: 'fluid-infusions',
    templateUrl: 'app/fluid-infusions/fluid-infusions.component.html',
    directives: [FORM_DIRECTIVES],
    styleUrls: ['app/fluid-infusions/fluid-infusions.component.css'],
    //providers: [CalculatorService]
})

export class FluidInfusionsComponent implements OnInit {
    @Input() dextroseConcentrations: DextroseConcentration[];  
    @Output() select: any = new EventEmitter();

    //_calcService: CalculatorService;
    dexconCurrent: DextroseConcentration;
    volume: number;
    addedDexcons: AddedDextroseConcentration[];

    constructor() {
        // this._calcService = calculatorService;
        // console.log("dexCons-ctor:", this.dextroseConcentrations)
     }

    onSubmit() {
        console.log("onSubmit: ", this.dexconCurrent);
        console.log("volume: ", this.volume);
        let adc = new AddedDextroseConcentration();
        adc.dextroseConcentration = this.dexconCurrent;
        adc.volume = this.volume;
        if (!this.addedDexcons) {
            this.addedDexcons = new Array<AddedDextroseConcentration>();
        }
        this.addedDexcons.push(adc);
    } 

    onChange(event) {
        console.log("onChange: ",event);
        console.log("onChange selected index: ",event.target.selectedIndex);    
        //this.select.emit(dexcon)
    }
    
    ngOnInit() {
        // this._calcService.getDextroseConecntrations()
        //     .subscribe(
        //     dex => this.dextroseConcentrations = dex);

        // console.log("dexCons-onInit:", this.dextroseConcentrations)
     }

}