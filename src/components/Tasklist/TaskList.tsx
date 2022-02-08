import { Typography } from "@mui/material";
import { Observer } from "mobx-react";

import { Task } from "../../store/models";
import { useTaskStoreContext } from "../../store/TaskContext";
import { TaskListItem } from "./TaskListItem";

export const TaskList = () => {
  const tasksStore = useTaskStoreContext();

  return (
    // Para que un componente se repinte, tengo que envolverlo
    // en el compponente Observer y hacer refeencia a un campo del observable taskList
    <Observer>
      {() => {
        return (
          <section>
            <Typography variant="h2" gutterBottom sx={{ marginTop: "64px" }}>
              Tareas:
            </Typography>
            {tasksStore.taskList.map(({ id, done, content }: Task) => {
              return (
                <TaskListItem
                  key={id}
                  {...{
                    done,
                    content,
                    toggleItem: () => tasksStore.toggleTask(id),
                  }}
                />
              );
            })}
          </section>
        );
      }}
    </Observer>
  );
};
