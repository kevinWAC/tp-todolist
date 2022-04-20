import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/models';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  users!: User[];
  updateUser!: number;

;  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next:(users: User[]) => {
          this.users = users
      },
      error(err: any): void {
        console.error(err)
      },
    })
  }

    update(userId: number) {
      this.updateUser = userId;
    }

    validate(user: User){
      this.userService.editUser(user).subscribe({
        next:() => {
          this.updateUser = 0;
        },
        error(err: any): void {
          console.error(err)
        },
      })
    }

    delete(userId: number) {
      this.userService.deleteUser(userId).subscribe({
        next:() => {
          location.reload();
        },
        error(err: any): void {
          console.error(err)
        },
      })
    }

}
