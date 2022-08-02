import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  user = {
    first_name: '',
    last_name: '',
    created_at: '',
  };
  submitted = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}

createUser(): void {
    const data = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      created_at: this.user.created_at
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      first_name: '',
      last_name: ''
    };
  }
}