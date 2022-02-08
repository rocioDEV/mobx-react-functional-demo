import { nanoid } from "nanoid";
import { createSelector } from "reselect";

import { Store, Task } from "./models";

const selectDoneItems = createSelector(
  (items: Task[]) => items,
  (items) => items.filter(({ done }) => done)
);

// Plain object with state fields and mutators. Its wrapped inside
// useLocalObservable and exposed to the entire components hierarchy
// via Context Provider (App.tsx)
export const createStore = (): Store => {
  return {
    taskList: new Array<Task>(),
    addTask(text: string) {
      const newTask = {
        id: nanoid(),
        content: text,
        done: false,
      };
      this.taskList.push(newTask);
    },
    toggleTask(id: string) {
      this.taskList = this.taskList.map((item) => {
        return item.id === id ? { ...item, done: !item.done } : item;
      });
    },
    selectDoneTasks(taskList: Task[]) {
      return selectDoneItems(this.taskList);
    },
  };
};
