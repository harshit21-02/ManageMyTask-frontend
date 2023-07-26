import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  getall="http://127.0.0.1:8000/tasks/get-todo-list"
  additem="http://127.0.0.1:8000/tasks/create-todo-item"
  getitem="http://127.0.0.1:8000/tasks/get-todo-item/"
  updateitem="http://127.0.0.1:8000/tasks/update-todo-item"
  deleteitem="http://127.0.0.1:8000/tasks/delete-todo-item/"
  gethistory="http://127.0.0.1:8000/tasks/log-deatils/"
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
