export class DextroseConcentration {
    public id: number;
    public concentration: string;
    public kcal_ml: number;
}

export class FluidInfusion{
    public dextroseConcentration: DextroseConcentration;
    public volume: number;
}