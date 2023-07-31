import { Component } from '@angular/core';
import { TaskListService } from '../../services/task-list.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { deletetask, updatetask } from '../state/task.actions';
import { Store } from '@ngrx/store';
import { Task } from '../state/interface';


@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
  
})
export class TaskdetailsComponent {
  
  priority: number = 1;
  status: number = 1;
  constructor(
    private taskList: TaskListService,
    private route: ActivatedRoute, 
    private router: Router, 
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store<{task: {task: Task[]}}>) {}
  tasks: any;
  history: any
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var id = params['pid'];
      console.log('Received ID:', id);

      this.taskList.taskdetails(id).subscribe((result)=>{
        // console.warn(result)
        this.tasks=result as Task;
        this.priority = this.tasks.priority
        this.status = this.tasks.status;
        
      })
      this.taskList.history(id).subscribe((result:any)=>{ 
        this.history=result.reverse();
      })
    });
  }

  updateTaskFormData(data: any)
  {
    // console.warn(this.tasks.pk)
    data['pk']=this.tasks.id
    this.taskList.updatetask(data).subscribe((result:any)=>{  
      
      this.tasks =result as Task; // Update the local tasks data with the response
      this.store.dispatch(updatetask({ updatedTask: this.tasks}));
      this.changeDetectorRef.detectChanges();

      this.taskList.history(this.tasks.id).subscribe((result:any)=>{
        this.history=result.reverse();
      })
   })
  }

  deletetask()
  {
   const toDeleteTask =this.tasks
   this.taskList.deletetask(this.tasks.id).subscribe((result)=>{
     console.warn(result);
     this.store.dispatch(deletetask(({ deleteTask: toDeleteTask as Task})));
     this.router.navigateByUrl('');
   })
  }


}
