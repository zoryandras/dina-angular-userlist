import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userForm: Users = {
    id: 0,
    first_name: '',
    last_name: '',
    created_at: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id)
    })
  }

  getById(id: number) {
    this.userService.getById(id).subscribe((data) => {
      this.userForm = data
    })
  }

  update() {
    this.userService.update(this.userForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/users"])
      },
      error:(err) => {
        console.log(err)
      }
    })
  }
}
