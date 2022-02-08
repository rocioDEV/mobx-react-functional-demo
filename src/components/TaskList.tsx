import styled from "@emotion/styled";
import { Checkbox, Typography } from "@mui/material";
import { Observer } from "mobx-react";

import { Task } from "../store/models";
import { useTaskStoreContext } from "../store/TaskContext";

const StyledItem = styled.li`
  list-style-type: none;
`;

interface Props {
  done: boolean;
  toggleItem: () => void;
  content: string;
}

export const TaskListItem: React.FC<Props> = ({
  done,
  toggleItem,
  content,
}) => {
  return (
    <StyledItem>
      <Checkbox checked={done} onChange={toggleItem} />
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          display: "inline",
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {content}
      </Typography>
    </StyledItem>
  );
};

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
