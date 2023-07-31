import { Task } from "./interface";

export interface State {
    tasks: Task[];
}

export const initialState: State= {
    tasks: [],
  };