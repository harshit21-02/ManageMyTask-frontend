import { createAction,props } from "@ngrx/store";
import { Task } from "./interface";

export const addtask = createAction('addtask',props<{ newTask: Task }>());
// export const updatetask = createAction('updatetask');
export const updatetask = createAction('updatetasksuccess',props<{ updatedTask: Task }>());
// export const deletetask = createAction('deletetask');
export const deletetask = createAction('deletetasksuccess', props<{ deleteTask: Task }>());

export const alltask = createAction('ALL_TASK');
export const tasksuccess = createAction('TASK_SUCCESS', props<{ tasks: Task[] }>());