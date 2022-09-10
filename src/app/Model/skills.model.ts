export class Skills {
    id? : number;
    percentage : number;
    name : string;


    constructor(percentage:number, name:string) {
        this.percentage = percentage;
        this.name = name;
    }
}
