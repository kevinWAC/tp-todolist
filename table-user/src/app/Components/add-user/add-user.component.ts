import { User } from 'src/app/Models/models';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser: Partial<User> = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(formAddUser: NgForm) {
    this.userService.createUser(this.newUser)
    .subscribe({
      next: () => {
        formAddUser.reset();
        this.newUser = {};
        location.reload();
      }
    })
  }

}
