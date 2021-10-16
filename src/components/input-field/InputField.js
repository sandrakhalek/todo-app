import { Button, InputBase, Paper } from "@mui/material";
import "./inputField.css";

function InputBtnField({ placeholder, btnText }) {
  return (
    <Paper
      sx={{
        p: "7px 7px",
        display: "flex",
        alignItems: "center",
        width: 600,
        margin: "auto",
        marginBottom: "4%",
        border: "1px solid lightgrey",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder={placeholder} />
      <Button variant="contained" sx={{ p: "10px" }}>
        {btnText}
      </Button>
    </Paper>
  );
}

export default InputBtnField;
