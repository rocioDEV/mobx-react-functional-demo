import styled from "@emotion/styled";
import { Checkbox, Typography } from "@mui/material";

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
