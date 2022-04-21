import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryForm = new FormGroup({
    category: new FormControl('', [Validators.required,Validators.minLength(1)]),
    color: new FormControl()
  })
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const color = this.categoryForm.value.color;
    const newColor = color === null ? "black": color;
    const newCategory = {
      category: this.categoryForm.value.category,
      color: newColor
    }
    this.categoriesService.createCategory(newCategory).subscribe({
      next: () => {
        location.reload();
      }
    })
  }

}
