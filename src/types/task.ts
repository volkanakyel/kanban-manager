export interface Board {
  name: string;
  id: number;
  columns: Columns[];
}

export interface Columns {
  name: string;
  id: number;
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}

export interface Subtask {
  title: string;
  isCompleted: boolean;
}

export interface BoardList {
  boardName: string;
  isBoardActive: boolean;
}