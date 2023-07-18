import CreateIcon from "@mui/icons-material/Create";
import { Button, CircularProgress, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import styles from "./ReviewForm.module.css";

import toast, { Toaster } from "react-hot-toast";
import { usePostReviewMutation } from "../../redux/features/books/bookApi";

const errorMessage = () => toast.error("Review Not Submit ! Try Again");
const successMessage = () => toast.success("Submit done !");

const ReviewForm = ({ bookId }) => {
  const { user } = useAppSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  // const [review, setReview] = useState({});
  const [postReview, { data, isLoading, error }] = usePostReviewMutation({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: bookId,
      data: { fullName: user?.fullName, feedback: feedback },
    };
    postReview(review);

    handleClose();
  };

  useEffect(() => {
    if (error) {
      errorMessage();
    }
    if (data) {
      successMessage();
      setFeedback("");
    }
  }, [error, data]);

  return (
    <div>
      {/* <Toaster /> */}
      <Button
        disabled={!user && true}
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
          {isLoading && <CircularProgress disableShrink />}
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
