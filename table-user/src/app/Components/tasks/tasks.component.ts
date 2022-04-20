import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from 'src/app/Models/models';
import { TasksService } from 'src/app/Services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks!: any;
  setTaskId!: number;
  newTask!: string;
  idUser!: number;

  constructor(private route: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit(): void {
   this.idUser = this.route.snapshot.params['id']
    this.tasksService.getTasksUser(this.idUser).subscribe({
      next:(tasks: Tasks) => {
          this.tasks = tasks
      },
      error(err: any): void {
        console.error("Erreur !!!!")
      },
    })
  }

  status(task: Tasks){
    task.done ? task.done = false : task.done = true
    this.tasksService.statusTaskUser(task).subscribe({
      next:() => {
      },
      error(err: any): void {
        console.error(err)
      },
    })
  }

  setTask(taskId: number) {
    this.setTaskId = taskId
  }

  valideEdit(task: Tasks) {
    this.tasksService.editTaskUser(task).subscribe({
      next:() => {
        this.setTaskId = 0;
      },
      error(err: any): void {
        console.error(err)
      },
    })
  }

  deleteTask(taskId: number){
    this.tasksService.deleteTask(taskId).subscribe({
      next:() => {
        location.reload();
      },
      error(err: any): void {
        console.error(err)
      },
    })
  }

  onSubmit(formAddTask: NgForm) {
    const newTask = {
     idUser: this.idUser,
     task: this.newTask,
     done: false
    }
    this.tasksService.createTask(newTask)
    .subscribe({
      next: () => {
        formAddTask.reset();
        location.reload();
      }
    })
  }

}
