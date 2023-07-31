import { Component } from '@angular/core';
import { TaskListService } from '../../services/task-list.service'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from '../state/interface';
import { addtask } from '../state/task.actions';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private taskList: TaskListService,private router: Router, private store: Store<{task: {task: Task[]}}>) {}

  getTaskFormData(data: any)
  {
    // console.warn(data)
    this.taskList.addtasks(data).subscribe((result: any)=>{
      
      const taskResult: Task = {
        id: result.id,
        title: result.title,
        description: result.description,
        due_date: result.due_date,
        priority: result.priority,
        status: result.status,
        created_at: result.created_at,
        updated_at: result.updated_at,
      }
      this.store.dispatch(addtask({ newTask: taskResult }));
      
      this.router.navigateByUrl('');
    })
  }
}
