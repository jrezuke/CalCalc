import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { DextroseConcentration, FluidInfusion } from '../fluid-infusions/dextrose-concentration'
import { AdcSortbyPipe } from '../pipes/sortby.pipe'
import { CalculatorService } from '../calculator/calculator.service'

export class TotalByConcentration {
    public concentration: string;
    public volume: number;
}

@Component({
    selector: 'fluid-infusions',
    templateUrl: 'app/fluid-infusions/fluid-infusions.component.html',
    directives: [FORM_DIRECTIVES],
    styleUrls: ['app/fluid-infusions/fluid-infusions.component.css'],
    pipes: [AdcSortbyPipe]
    //providers: [CalculatorService]
})

export class FluidInfusionsComponent implements OnInit {
    @Input() dextroseConcentrations: DextroseConcentration[];
    @Output() select: any = new EventEmitter();

    _calcService: CalculatorService;
    dexconCurrent: DextroseConcentration;
    volume: number;
    fluidInfusions: FluidInfusion[];
    totalsByConcentration: TotalByConcentration[];

    constructor() {
        this._calcService = calculatorService;
        // console.log("dexCons-ctor:", this.dextroseConcentrations)
    }

    onRemove(addedDexcon, index) {
        console.log("onRemove:", addedDexcon);
        console.log("index:", index);
        this.fluidInfusions.splice(index, 1);
        console.log("addedDexcons:", this.fluidInfusions);
        this.calculateTotals();
    }

    onSubmit() {
        console.log("onSubmit: ", this.dexconCurrent);
        console.log("volume: ", this.volume);
        let adc = new FluidInfusion();
        adc.dextroseConcentration = this.dexconCurrent;
        adc.volume = this.volume;
        if (!this.fluidInfusions) {
            this.fluidInfusions = new Array<FluidInfusion>();
        }
        this.fluidInfusions.push(adc);
        this.calculateTotals();

        console.log("totals", this.totalsByConcentration);
        console.log("isArray:", Array.isArray(this.totalsByConcentration));
    }

    calculateTotals() {
        let totals = this.fluidInfusions.reduce(this.reducer, {});
        this.totalsByConcentration = new Array<TotalByConcentration>();

        for (var key in totals)
        {
            let total = new TotalByConcentration();
            total.concentration = key;
            total.volume = totals[key];
            //console.log("key: ", key);
            //console.log("total: ", total);
            this.totalsByConcentration.push(total);
        }

    }

    reducer(total, dex:FluidInfusion) {
        if (!total[dex.dextroseConcentration.concentration]) {
            total[dex.dextroseConcentration.concentration] = dex.volume;
        } else {
            total[dex.dextroseConcentration.concentration] = Number(total[dex.dextroseConcentration.concentration]) + Number(dex.volume);
        }

        return total;
    }

    onChange(event) {
        console.log("onChange: ", event);
        console.log("onChange selected index: ", event.target.selectedIndex);
        //this.select.emit(dexcon)
    }

    ngOnInit() {
        this._calcService.getFluidInfusions()
            .subscribe(
            fi => this.fluidInfusions = fl);

        // console.log("dexCons-onInit:", this.dextroseConcentrations)
    }

}