import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './MyComponents/add-task/add-task.component';
import { AppComponent } from './app.component';
import { TasksComponent } from './MyComponents/tasks/tasks.component';
import { TaskdetailsComponent } from './MyComponents/taskdetails/taskdetails.component';

const routes: Routes = [
  { path: '', component: TasksComponent }, // Default route for the home page
  { path: 'add-task', component:  AddTaskComponent},
  { path: 'details/:pid', component:  TaskdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
