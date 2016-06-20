import { Pipe, PipeTransform } from '@angular/core';
import { AddedDextroseConcentration } from '../fluid-infusions/dextrose-concentration'
@Pipe({
    name: 'adcsortby',
    pure: false
})

export class AdcSortbyPipe implements PipeTransform {
    transform(value: AddedDextroseConcentration[], args: any[]): any {
        if (value.length == 0) return value;
        value.sort((a, b) => {
            let ac = Number(a.dextroseConcentration.concentration.substr(0, a.dextroseConcentration.concentration.length - 1));
            let bc = Number(b.dextroseConcentration.concentration.substr(0, b.dextroseConcentration.concentration.length - 1));
            if (ac < bc) {
                return -1;
            } else if (ac > bc) {
                return 1;
            } else {
                return 0;
            }
        });
        return value;
    }
}