import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userForm: Users = {
    id: 0,
    first_name: '',
    last_name: '',
    created_at: ''
  }

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.userService.create(this.userForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(['users/new'])
      },
      error:(err) => {
        console.log(err)
      }
    })
  }
}
