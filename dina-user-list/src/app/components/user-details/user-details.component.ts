import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})

export class UserDetailsComponent implements OnInit {
  currentUser = null;
  message = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id: any): void {
    this.userService.read(id).subscribe(
      (user) => {
        this.currentUser = user;
        console.log(user);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setAvailableStatus(status: any): void {
    const data = {
      name: this.currentUser!.first_name,
      last_name: this.currentUser!.last_name,
      created_at: status,
    };

    this.userService.update(this.currentUser!.id, data).subscribe(
      (response) => {
        this.currentUser!.available = status;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser(): void {
    this.userService
      .update(this.currentUser!.id, this.currentUser)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'The user was updated!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteUser(): void {
    this.userService.delete(this.currentUser!.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/users']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
