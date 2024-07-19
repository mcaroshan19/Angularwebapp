import { Component, } from '@angular/core';
import { AddCategortRequest } from '../model/add-category-request-model';
import { CategoryService } from '../Services/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  model: AddCategortRequest; 

  constructor(private categoryService: CategoryService) {


  }

  onFormSubmit(form:NgForm) {
    debugger;
    if (form.valid) {
      this.categoryService.addCategory(this.model).subscribe(
        (response) => {
          console.log('Category saved successfully', response);
          // Handle successful response
        },
        (error) => {
          console.error('Error saving category', error);
          // Handle error response
        }
      );
    }
  }

}
