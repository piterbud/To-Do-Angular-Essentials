import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// variable for random user choice
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // here we have state of our application
  selectedUser = DUMMY_USERS[randomIndex];

  // that's better practise to outsource computations connected with property binding
  // using getters for computed values - getter is a method
  // we use getter name as a property name

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectedUser() {
    // console.log('Clicked!');

    // with this method after click event we can easly change state of application, for example we can change user
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
