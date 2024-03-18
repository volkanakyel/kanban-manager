export interface Board {
  name: string;
  columns: Columns[];
}

export interface Columns {
  name: string;
  tasks: Task[];
}

export interface Task {
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