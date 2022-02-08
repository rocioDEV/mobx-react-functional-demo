import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import { Task } from "../../store/models";

const StyledUl = styled.ul`
  margin: 20px 0;
  padding: 0;
`;

const StyledLi = styled.li`
  list-style: none;
`;

export const DoneTasks: React.FC<{
  doneTasks: Task[];
}> = ({ doneTasks }) => {
  return (
    <>
      <Typography variant="body2">
        🎉 Buen trabajo!! Ya has completado {doneTasks.length} tarea
        {doneTasks.length > 1 ? "s" : ""}:
      </Typography>
      <StyledUl>
        {doneTasks.map((task: Task) => {
          const content = task.content;
          return (
            <StyledLi key={task.id}>
              <Typography variant="body1">- {content}</Typography>
            </StyledLi>
          );
        })}
      </StyledUl>
    </>
  );
};
