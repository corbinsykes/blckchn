export class PopularStat {
    name: string;
    value: number;
    unit: string;
    desc: string;

    constructor(name, value, description, unit?) {
        this.name = name;
        this.value = value;
        this.unit = unit;
        this.desc = description;
    }
}