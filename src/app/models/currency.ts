export class Currency {
    name: string;
    rate: number;
    code: string;
    flag: string;

    constructor(name, code, rate, flag) {
        this.name = name;
        this.code = code;
        this.rate = rate;
        this.flag = flag
    }
}