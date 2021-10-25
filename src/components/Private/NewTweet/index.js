import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const NewTweet = (open) => {
  const [openNewTweet, setOpenNewTweet] = useState(open);

  const handleClose = () => {
    setOpenNewTweet(false);
  };

  return (
    <div>
      <Dialog
        open={openNewTweet}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Nuevo Tweet</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="tweet"
            label="¿Qué estás pensando?"
            type="text"
            multiline
            rows={4}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Twittear
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default NewTweet;
