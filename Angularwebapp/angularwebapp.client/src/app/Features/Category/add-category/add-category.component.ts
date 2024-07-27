import { Component, } from '@angular/core';
import { AddCategortRequest } from '../model/add-category-request-model';
import { CategoryService } from '../Services/category.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

 
model:AddCategortRequest;

  constructor(private categoryService: CategoryService) {
    this.model ={
      Name:'',
      UrlHandle:''
    };


  }

  // onFormSubmit(form:any) {
  //   debugger;
  //   if (form.valid) {
  //     this.categoryService.addCategory(form.value).subscribe(
  //       (response) => {
  //         console.log('Category saved successfully', response);
  //         // Handle successful response
  //       },
  //       (error) => {
  //         console.error('Error saving category', error);
  //         // Handle error response
  //       }
  //     );
  //   }
  onFormSubmit(){
    this.categoryService.addCategory(this.model);

  }


}


