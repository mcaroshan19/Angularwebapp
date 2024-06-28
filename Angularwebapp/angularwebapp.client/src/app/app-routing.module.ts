import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Features/Category/add-category/add-category.component';
import { CategoryListComponent } from './Features/Category/category-list/category-list.component';

const routes: Routes = [
  {
    path: 'Admin/category-list',
    component: CategoryListComponent, 
  
  },
  { path: 'add-category', component: AddCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
