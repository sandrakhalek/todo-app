import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Form from "../form/Form";
import "./modal.css";

function EditModal({ taskName }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <IconButton aria-label="Edit Task" onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open}>
        <DialogTitle sx={{ textAlign: "center" }}>{taskName}</DialogTitle>
        <DialogContent>
          <Form taskName={taskName} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditModal;
