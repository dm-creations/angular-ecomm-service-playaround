import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserListService } from './user-list.service';
import { SimpleForm } from '../user-form/user-form.component'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: User[];
  editUser: User; // the user currently being edited

  constructor(private usersService: UserListService) {}

  ngOnInit() {
    this.getUsers();
  }

  formSubmit() {
    // for each index field run add.thing
  }

  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => (this.users = users));
  }

  add(name: string): void {
    this.editUser = undefined;
    name = name.trim();
    if (!name) {
      return;
    }

    // The server will generate the id for this new user
    const newUser: User = { name } as User;
    this.usersService
      .addUser(newUser)
      .subscribe(user => this.users.push(user));
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.usersService
      .deleteUser(user.id)
      .subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.usersService.deleteUser(user.id);
    */
  }

  edit(user: User) {
    this.editUser = user;
  }

  search(searchTerm: string) {
    this.editUser = undefined;
    if (searchTerm) {
      this.usersService
        .searchUsers(searchTerm)
        .subscribe(users => (this.users = users));
    }
  }

  update() {
    if (this.editUser) {
      this.usersService
        .updateUser(this.editUser)
        .subscribe(user => {
        // replace the user in the users list with update from server
        const ix = user ? this.users.findIndex(u => u.id === user.id) : -1;
        if (ix > -1) {
          this.users[ix] = user;
        }
      });
      this.editUser = undefined;
    }
  }
}
// export class UserListComponent implements OnInit {
//   title = 'Users';
//   users;

//   constructor() {
//     let service = new UserListService();
//     this.users = service.getUsers();
//   }

//   ngOnInit() {
//     console.log(users)
//   }

// }