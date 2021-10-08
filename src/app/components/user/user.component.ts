import { Component } from "@angular/core";

@Component ({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // properties
    firstName = 'John';
    lastName = 'Doe';
    age = 30;
    adress = {
        street: 'Main st 50',
        city: 'Boston',
        state: 'MA'
    }

    // methods
    constructor() {
        this.sayHello()
        this.hasBirthday();
        this.hasBirthday();
    }

    sayHello() {
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthday() {
        this.age++;
    }

}


