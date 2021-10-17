import { Alert, Button, InputBase, Paper, Snackbar } from "@mui/material";
import { useState } from "react";
import "./inputBtnField.css";

function InputBtnField({ placeholder, btnText, onClick }) {
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState(false);

  const handleEnterPress = (event) => event.key === "Enter" && addTask();
  const checkInputValue = () => {
    return value === "";
  };

  const addTask = () => {
    if (checkInputValue()) {
      setAlert(true);
    } else {
      onClick(value);
      setValue("");
      setAlert(false);
    }
  };

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
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleEnterPress}
      />
      <Button variant="contained" sx={{ p: "10px" }} onClick={addTask}>
        {btnText}
      </Button>
      <Snackbar
        open={alert}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setAlert(false)}
      >
        <Alert
          onClose={() => setAlert(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Input value is empty!
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default InputBtnField;
