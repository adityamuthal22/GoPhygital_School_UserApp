import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function Popup({ user, onClose }) {
  return (
    <Dialog open={Boolean(user)} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{user?.UserName}'s Details</DialogTitle>
      <DialogContent dividers>
        <p>
          <strong>Email:</strong> {user?.Email}
        </p>
        <p>
          <strong>Language:</strong> {user?.Language}
        </p>
        <p>
          <strong>Address:</strong> {user?.Address}
        </p>
        <p>
          <strong>Standard:</strong> {user?.Standard}
        </p>
        <p>
          <strong>Subjects:</strong> {user?.Subjects?.join(", ")}
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Popup;
