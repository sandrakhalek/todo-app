import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, FormControlLabel, IconButton, Paper } from "@mui/material";
import EditModal from "../modal/Modal";

function Task(props) {
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
      <FormControlLabel control={<Checkbox />} label={props.taskName} />
      <div style={{ marginLeft: "auto" }}>
        <EditModal taskName={props.taskName} />
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
}

export default Task;
