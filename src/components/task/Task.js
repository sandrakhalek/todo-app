import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, FormControlLabel, IconButton, Paper } from "@mui/material";
import { useState } from "react";

function Task({ task, deleteClick, update }) {
  const [checked, setChecked] = useState(false);

  const updateTask = (isDone) => {
    setChecked(isDone);
    update(task, isDone);
  };

  return (
    <Paper
      sx={{
        p: "7px 20px",
        display: "flex",
        width: 600,
        margin: "auto",
        marginTop: "5px",
        border: "1px solid lightgrey",
      }}
    >
      <FormControlLabel
        control={<Checkbox onChange={() => updateTask(!checked)} />}
        label={task.name}
        sx={{ textDecoration: checked ? "line-through red" : "none" }}
      />
      <div style={{ marginLeft: "auto" }}>
        <IconButton aria-label="Delete" onClick={() => deleteClick(task)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
}

export default Task;
