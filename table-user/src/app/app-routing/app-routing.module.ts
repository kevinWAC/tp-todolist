import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from '../Components/add-user/add-user.component';
import { TasksComponent } from '../Components/tasks/tasks.component';
import { UserComponent } from '../Components/user/user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UserComponent},
  { path: 'tasks/:id', component: TasksComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
