import { useLocalObservable } from "mobx-react";

import { Main } from "./Main";
import { createStore } from "../store/store";
import { TaskContext } from "../store/TaskContext";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const App: React.FC = () => {
  const store = useLocalObservable(createStore);
  return (
    <TaskContext.Provider value={store}>
      <Main />
    </TaskContext.Provider>
  );
};
