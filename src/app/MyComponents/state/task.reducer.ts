import { Action, createReducer, on } from "@ngrx/store"
import { addtask, tasksuccess, updatetask, deletetask } from "./task.actions"
import { initialState, State } from "./task.state"

const _taskReducer = createReducer(
    initialState, 
    on(addtask,(state, { newTask }) => {
        const Updatedstate = {
            ...state,
            tasks: [...state.tasks,newTask],
        };
        return Updatedstate
    }),
    on(tasksuccess, (state, { tasks }) => ({tasks: [...tasks]})),

    on(updatetask, (state, { updatedTask }) => {
        const updatedTasks = state.tasks.map((task) =>
          task.id === updatedTask.id ? { ...task, ...updatedTask } : task
        );
    
        const Updatedstate = {
          ...state,
          tasks: updatedTasks,
        };
        
        return Updatedstate
      }),

      on(deletetask, (state, { deleteTask }) => {
        
        const updatedTasks = state.tasks.filter((task) => task.id !== deleteTask.id);
    
        const Updatedstate = {
          ...state,
          tasks: updatedTasks,
        };
        // console.log(deleteTask)
        // console.log('Updated State:', Updatedstate);
        return Updatedstate
      })
);


export function taskReducer(state: State | undefined, action: Action) {
    return _taskReducer(state, action);
  }