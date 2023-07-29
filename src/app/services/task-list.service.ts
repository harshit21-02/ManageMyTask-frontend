import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  getall="https://manage-my-task-backend.vercel.app/tasks/get-todo-list"
  additem="https://manage-my-task-backend.vercel.app/tasks/create-todo-item"
  getitem="https://manage-my-task-backend.vercel.app/tasks/get-todo-item/"
  updateitem="https://manage-my-task-backend.vercel.app/tasks/update-todo-item"
  deleteitem="https://manage-my-task-backend.vercel.app/tasks/delete-todo-item/"
  gethistory="https://manage-my-task-backend.vercel.app/tasks/log-deatils/"
  constructor(private http: HttpClient) { }

  tasks()
  {
    return this.http.get(this.getall);
  }

  addtasks(data: any)
  {
    return this.http.post(this.additem,data);
  }

  taskdetails(data: any)
  {
    var url=this.getitem+data
    return this.http.get(url);
  }

  history(data: any)
  {
    var url=this.gethistory+data
    return this.http.get(url);
  }

  updatetask(data: any)
  {
    // console.log(data)
    return this.http.patch(this.updateitem,data);
  }

  deletetask(data: any)
  {
    var url=this.deleteitem+data
    return this.http.delete(url);
  }
}
