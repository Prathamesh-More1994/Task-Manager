import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomNumber];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectedUser() {
    const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomNumber];
  }
}
