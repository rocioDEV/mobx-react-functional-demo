import styled from "@emotion/styled";

import { TaskList } from "./TaskList";
import { AddTask } from "./AddTask";
import { SideBar } from "./Sidebar/SideBar";

const StyledMain = styled.div`
  display: flex;
  width: 80%;
  height: 100%
  margin: auto;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
  margin: 50px;
`;

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <StyledDiv>
        <AddTask />
        <TaskList />
      </StyledDiv>
      <SideBar />
    </StyledMain>
  );
};
