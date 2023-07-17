import CreateIcon from "@mui/icons-material/Create";
import { Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./ReviewForm.module.css";
const ReviewForm = () => {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant={"outlined"}
        disableElevation
        startIcon={<CreateIcon />}
        sx={{
          transition: "all 0.3s ease-in",
          borderColor: "#EA529B",
          color: "#EA529B",
          borderRadius: 0,
          marginY: 2,
          "&:hover": {
            backgroundColor: "#EA529B",
            borderColor: "#EA529B",
            color: "white",
          },
        }}
      >
        Submit your Review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        className={styles.ModalContainer}
      >
        <div className={styles.ModalWrapper}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Feedback Message"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button
              variant="outlined"
              //   color="primary"
              type="submit"
              sx={{
                transition: "all 0.3s ease-in",
                borderColor: "#EA529B",
                color: "#EA529B",
                borderRadius: 0,
                marginY: 2,
                "&:hover": {
                  backgroundColor: "#EA529B",
                  borderColor: "#EA529B",
                  color: "white",
                },
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ReviewForm;
