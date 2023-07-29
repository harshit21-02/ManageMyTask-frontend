import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { TaskListService } from '../../services/task-list.service'
import * as Papa from 'papaparse'; // Import papaparse library

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: any;
  param: Array<string> = ['Priority','Status','Due Date'];
  input_param: any;
  list: any;
  selected :any='All Tasks';

  constructor(private taskList: TaskListService, 
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone)
  {

    taskList.tasks().subscribe((data)=>{
      console.warn("data",data)
      this.tasks=data
    });

    this.list = [
      'All Tasks',
   ]; 

  }

  select(item: any) {
    this.selected = item; 
  };
  isActive(item: any) {
      console.log(item)
      return this.selected === item;
  };

  // ngOnInit() {
  //   // Fetch data from the API
  //   this.ngZone.run(() => {
  //     this.changeDetectorRef.detectChanges();
  //   });
  //   this.taskList.tasks().subscribe((data)=>{
  //     console.warn("data1",data)
  //     this.tasks=data;
      
  //     // console.log('sorting',this.taskSortByParam(this.tasks.'due_date'));
  //   });
  // }

  
  taskSortByParam(prm: any) {
    console.log(prm);
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
