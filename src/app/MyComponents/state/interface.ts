export interface Task {
    id: number;
    title: string;
    description: string;
    due_date: Date;
    priority: number;
    status: number;
    created_at: Date;
    updated_at: Date;
  }