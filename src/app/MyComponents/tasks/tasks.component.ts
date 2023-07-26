import { Component } from '@angular/core';
import { TaskListService } from '../../services/task-list.service'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks:any;
  constructor(private taskList: TaskListService)
  {
    taskList.tasks().subscribe((data)=>{
      console.warn("data",data)
      this.tasks=data
    });
    
  }

}
