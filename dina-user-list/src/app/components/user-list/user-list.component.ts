import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any;
  currentUser = null;
  currentIndex = -1;
  name = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers(): void {
    this.userService.readAll().subscribe(
      (users) => {
        this.users = users;
        console.log(users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refresh(): void {
    this.readUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setCurrentUser(user: any, index: any): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  deleteAllUsers(): void {
    this.userService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.readUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchByName(): void {
    this.userService.searchByName(this.name).subscribe(
      (users) => {
        this.users = users;
        console.log(users);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
