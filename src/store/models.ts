export type Task = {
  id: string;
  content: string;
  done: boolean;
};

export type Store = {
  taskList: Task[];
  addTask(text: string): void;
  toggleTask(id: string): void;
  selectDoneTasks(taskList: Task[]): Task[];
};
