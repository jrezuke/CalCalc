export class DextroseConcentration {
    public id: number;
    public concentration: string;
    public kcal_ml: number;
}

export class AddedDextroseConcentration{
    public dextroseConcentration: DextroseConcentration;
    public volume: number;
}