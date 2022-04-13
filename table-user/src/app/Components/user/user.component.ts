import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

users!: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next:(users: User[]) => {
          this.users = users
      },
      error(err: any): void {
        console.error("Erreur !!!!")
      },
    })
  }

}
