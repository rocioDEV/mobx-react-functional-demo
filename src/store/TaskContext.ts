import { createContext, useContext } from "react";

import { Store } from "./models";

export const TaskContext = createContext<Store | null>(null);

export const useTaskStoreContext = () => {
  return useContext(TaskContext) as Store;
};
