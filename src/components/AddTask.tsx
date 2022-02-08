import styled from "@emotion/styled";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

import { useTaskStoreContext } from "../store/TaskContext";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

// To add a new item to the store, we use the method exposed by
// our context (directly changes the state object)
export const AddTask = () => {
  const [value, setValue] = useState("");
  const tasksStore = useTaskStoreContext();

  return (
    <StyledDiv>
      <TextField
        {...{
          color: "secondary",
          value,
          label: "¿Qué tienes que hacer?",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value),
        }}
      />

      <Button
        {...{
          onClick: () => {
            value && tasksStore.addTask(value);
            setValue("");
          },
          variant: "outlined",
          color: "secondary",
          sx: {
            marginTop: "8px",
          },
        }}
      >
        AÑADIR A LA LISTA
      </Button>
    </StyledDiv>
  );
};
