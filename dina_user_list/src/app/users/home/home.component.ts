import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allUsers: Users[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.get();
  }

  
  get() {
    this.userService.get().subscribe((data) => {
      this.allUsers = data;
    });

  }

}
