import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, switchMap } from "rxjs";
import { TaskListService } from "src/app/services/task-list.service";
import { Task } from "./interface";
import { alltask, tasksuccess, updatetask, deletetask } from "./task.actions";


@Injectable()
export class TaskEfefcts{

    constructor(private action$: Actions,private taskList: TaskListService ){
    }
        gettask$ = createEffect(()=>{
            return this.action$.pipe(ofType(alltask),switchMap((action)=>{
                return  this.taskList
                    .tasks().
                    pipe(map((data) => {
                        const tasksList = Object.values(data);
                        return tasksuccess({ tasks: tasksList });
                }))
            }))
        })
}