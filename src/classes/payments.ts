// classes
import { HasFormatter } from "../interfaces/HasFormatter"

export class Payment implements HasFormatter
{
    constructor(
        readonly receipient: string,
        private details: string,
        public amount: number,
    ){}

    format(){
        return `${this.receipient} is owed $${this.amount} for ${this.details} `
    }
}