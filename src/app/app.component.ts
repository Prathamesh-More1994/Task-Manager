import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Task-Manager';
  users = DUMMY_USERS;
  userId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.userId);
  }

  onSelectedUser(id: string) {
    this.userId = id;
  }
}
