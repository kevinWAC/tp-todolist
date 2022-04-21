import { Category } from './../../Models/models';
import { CategoriesService } from './../../Services/categories.service';
import { FormBuilder, FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
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
  nameCat!: string;
  categories!: Category[];

  taskForm = new FormGroup({
    category: new FormControl('', [Validators.required,]),
    task: new FormControl('', [Validators.required,Validators.minLength(1)])
  })

  filterForm = new FormGroup({
    filter: new FormControl()
  })

  constructor(private route: ActivatedRoute, private tasksService: TasksService, private categoriesService: CategoriesService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getTasks();
    this.getCategories();

  }

  getTasks() {
    this.idUser = parseFloat(this.route.snapshot.params['id'])
    this.tasksService.getTasksUser(this.idUser).subscribe({
      next:(tasks: Tasks) => {
          this.tasks = tasks
      },
      error(err: any): void {
        console.error("Erreur !!!!")
      },
    })
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe({
      next:(cat: Category[]) => {
          this.categories = cat
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

  onSubmit() {
    const idCat = this.taskForm.value.category
    const Task = this.taskForm.value.task
    this.categoriesService.getCategoriesId(idCat).subscribe({
      next:(cat: Category) => {
        console.log(cat)
        const newTask = {
          idUser: this.idUser,
          task: Task,
          done: false,
          category:cat
         }
         this.tasksService.createTask(newTask).subscribe({
           next: () => {
             location.reload();
           }
         })
      },
      error(err: any): void {
        console.error("Erreur !!!!")
      },
    })
  }

  filter() {
    const filter = this.filterForm.value.filter
    this.tasksService.filterTask(filter, this.idUser).subscribe({
      next: (task:any) => {
       this.tasks = task
      }
    })
  }

}
