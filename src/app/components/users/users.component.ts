import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses: {};
  currentStyles: {};

  constructor() {}

  addUser(user: User) {
    this.users.push(user);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA',
          },
          image: 'http://lorempixel.com/100/100/people/1',
          isActive: true,
        },
        {
          firstName: 'Johanna',
          lastName: 'Doe',
          age: 25,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA',
          },
          image: 'http://lorempixel.com/100/100/people/2',
          isActive: false,
        },
        {
          firstName: 'Bob',
          lastName: 'Smith',
          age: 39,
          address: {
            street: '20 Avenue',
            city: 'Miami',
            state: 'FL',
          },
          image: 'http://lorempixel.com/100/100/people/5',
          isActive: true,
        },
      ];
      this.loaded = true;
    }, 2000);

    setTimeout(() => {
      this.addUser({
        firstName: 'Lemurio',
        lastName: 'Thompson',
        image: 'http://lorempixel.com/100/100/people/4',
        isActive: true,
      });
    }, 4000);

    this.setCurrentClasses();
    this.setCurrentStyles();

    // this.users.length = 0;
  }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.enableAdd,
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      'font-size': this.showExtended ? '' : '30px',
    };
  }
}
