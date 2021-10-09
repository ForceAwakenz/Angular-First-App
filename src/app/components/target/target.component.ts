import {Component} from '@angular/core';

@Component ({
    selector: 'app-target',
    templateUrl: './target.component.html',
    styleUrls: ['./target.component.css']
})

export class TargetComponent {
    searchProvider = 'Google';
    searchUrl = 'https://www.google.com';

    // // properties
    // firstName: string;
    // lastName: string;
    // age: number;
    // address;
    // // numberArray: number[];
    // mixedArray: any[];
    // myTuple: [string, boolean, number, number];

    // // methods
    // constructor() {
    //     this.firstName = 'John';
    //     this.lastName = 'Doe';
    //     this.age = 30;
    //     this.address = {
    //         street: 'Main st 50',
    //         city: 'Boston',
    //         state: 'MA'
    //     }
    //     // this.sayHello()
    //     // this.hasBirthday();
    //     // this.hasBirthday();
    // }

    // sayHello(sign: string): void {
    //     console.log(`Hello ${this.firstName}${sign}`);
    // }

    // hasBirthday() {
    //     this.age++;
    // }

}
