import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Observer } from "mobx-react";

import { useTaskStoreContext } from "../../store/TaskContext";
import { DoneTasks } from "./DoneTasks";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 50px auto;
  border: 1px gray dashed;
  padding: 25px;
`;

export const SideBar: React.FC = () => {
  const tasksStore = useTaskStoreContext();
  const { selectDoneTasks } = tasksStore;

  return (
    <Observer>
      {() => (
        // Tengo que llamar al selector dentro del observer (lo que detecta son referencias a tasksStore.taskList)
        <StyledSection>
          {tasksStore.taskList.length ? (
            <DoneTasks doneTasks={selectDoneTasks(tasksStore.taskList)} />
          ) : (
            <Typography variant="body2">
              Marca una tarea como hecha y aparecerá aquí 💪
            </Typography>
          )}
        </StyledSection>
      )}
    </Observer>
  );
};
