import { TextField } from "@mui/material";

function Form({ taskName }) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={taskName}
        fullWidth
      />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
    </>
  );
}

export default Form;
