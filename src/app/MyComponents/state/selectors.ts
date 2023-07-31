import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './task.state'; // Import the State interface

// Create a feature selector for your State
export const selectTaskState = createFeatureSelector<State>('task');

// Create a selector to get the tasks array from the state
export const selectTasks = createSelector(
  selectTaskState,
  (state: State) => state.tasks
);