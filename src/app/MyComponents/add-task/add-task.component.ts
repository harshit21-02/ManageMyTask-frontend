import { Component } from '@angular/core';
import { TaskListService } from '../../services/task-list.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private taskList: TaskListService,private router: Router) {}

  getTaskFormData(data: any)
  {
    // console.warn(data)
    this.taskList.addtasks(data).subscribe((result)=>{
      console.warn(result);
      this.router.navigateByUrl('');
    })
  }
}
