import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { TaskListService } from '../../services/task-list.service'
import * as Papa from 'papaparse'; // Import papaparse library
import { Time } from '@angular/common';
import { DeclarationListEmitMode } from '@angular/compiler';
import { Store } from '@ngrx/store';
import { Task } from '../state/interface';
import { addtask, alltask } from '../state/task.actions';
import { selectTasks } from '../state/selectors';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[]=[];
  param: Array<string> = ['Priority','Status','Due Date'];
  input_param: any;
  list: any;
  selected :any='All Tasks';

  constructor(private taskList: TaskListService, 
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
    private store: Store)
  {
    // console.log("hello")
    // taskList.tasks().subscribe((data)=>{
    //   console.warn("data",data)
    //   this.tasks=data
    // });

    this.list = [
      'All Tasks',
   ]; 

  }

  ngOnInit() {
    // Subscribe to the selectTasks selector to get the tasks data from the store
    this.store.select(selectTasks).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      console.log("selector",tasks)
    });
    
    if (this.tasks.length === 0) {
      console.log("HELLOOO")
      this.store.dispatch(alltask());
    }
    
  }

  select(item: any) {
    this.selected = item; 
  };
  isActive(item: any) {
      return this.selected === item;
  };
  
  taskSortByParam(prm: any) {
    const mapping = {
      'Status': 'status',
      'Priority': 'Priority',
    };
    
    if (prm === 'Status') {
      prm = 'status';
    } else if (prm === 'Priority') {
      prm = 'priority';
    }
    else
    prm='due_date'

    return console.warn(this.tasks.sort((a:any, b:any) => {
      return a[prm] >= b[prm] ? 1 : -1;
    }));
  }

  exportToCSV() {
    const csvData = Papa.unparse(this.tasks, {
      header: true, // Add header row with property names
    });

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'tasks.csv';
    a.click();

    window.URL.revokeObjectURL(url);
  }

  
}
