import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import ReviewForm from "../../Components/ReviewForm/ReviewForm";
import {
  useDeleteBookMutation,
  useGetReviewQuery,
  useGetSingleBookQuery,
} from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hook";
import { IComment } from "../../types/book";
// toster
const UserError = () => toast.error("You are not owner !");
const UserSuccess = () => toast.success("You are  owner ");
const deleteErrorM = () => toast.error("Failed to delete !");
const deleteSuccess = () => toast.success("Delete Successful");
// const UserError = () => toast.error("You are not owner !");

const BookDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [
    deleteBook,
    { data: deleteData, isLoading: deleteIsLoading, error: deleteError },
  ] = useDeleteBookMutation("");
  const { user } = useAppSelector((state) => state.user);
  let wishlist;
  let readSoon;
  let finished;

  if (user) {
    wishlist = user?.wishlist;
    readSoon = user?.readSoon;
    finished = user?.finishedBook;
  }

  const { data: reviews } = useGetReviewQuery(params.id);

  const { data, isLoading, error } = useGetSingleBookQuery(params?.id);

  const handleEdit = () => {
    if (!(user?._id === data?.data?.user)) {
      UserError();
    } else {
      navigate(`/books/update-book/${params?.id}`);
    }
  };
  const handleDelete = () => {
    if (!(user?._id === data?.data?.user)) {
      UserError();
    } else {
      deleteBook(params.id);
    }
  };

  useEffect(() => {
    if (deleteError) {
      deleteErrorM();
    }
    if (deleteData) {
      deleteSuccess();
      navigate("/");
    }
  }, [deleteError, deleteData]);

  return (
    <div>
      <Container sx={{ paddingY: 10 }}>
        {isLoading && <CircularProgress disableShrink />}

        {data && (
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={4}
              border={"1px solid #e2e2e2"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                src={`${
                  data?.data?.imgUrl
                    ? data?.data?.imgUrl
                    : "https://i.ibb.co/Mft4w0h/no-image.png"
                }`}
                alt=""
                width={300}
                style={{ paddingBottom: "5vh", paddingTop: "3vh" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderTop: "1px solid #e2e2e2",
                }}
              >
                <Tooltip title="Add to wishlist">
                  <IconButton sx={{ color: "#F27E01" }}>
                    {wishlist?.includes(params.id) ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Plan to read">
                  <IconButton sx={{ color: "#F27E01" }}>
                    {readSoon?.includes(params.id) ? <DoneIcon /> : <AddIcon />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              {/* <Toaster /> */}
              <Box>
                <Typography variant="h4" textTransform={"uppercase"}>
                  {data?.data?.title}
                </Typography>
                <Typography variant="subtitle1" marginTop={5}>
                  <span style={{ fontWeight: "bold" }}>Author:</span>{" "}
                  {data?.data?.author}
                </Typography>
                <Typography variant="subtitle1" marginTop={1}>
                  <span style={{ fontWeight: "bold" }}>Genre:</span>{" "}
                  {data?.data?.genre}
                </Typography>
                <Typography variant="subtitle1" marginTop={1}>
                  <span style={{ fontWeight: "bold" }}>Publication Date:</span>{" "}
                  {data?.data?.publicationDate}
                </Typography>
              </Box>
              {finished?.includes(params.id) ? (
                <Button
                  variant={"contained"}
                  disableElevation
                  sx={{
                    backgroundColor: "#EA529B",
                    borderRadius: 0,
                    marginY: 5,
                    "&:hover": {
                      backgroundColor: "#EA529B",
                      borderColor: "#EA529B",
                      color: "white",
                    },
                  }}
                >
                  You Have Already Finished
                </Button>
              ) : (
                <Button
                  variant={"outlined"}
                  disableElevation
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
                  Mark as Finished
                </Button>
              )}

              <br />
              <Button
                disabled={!user && true}
                variant={"contained"}
                onClick={handleEdit}
                sx={{
                  backgroundColor: "#FDAD00",
                  borderRadius: 0,
                  margin: 5,
                  "&:hover": {
                    backgroundColor: "#FDAD00",
                    borderColor: "#FDAD00",
                    color: "white",
                  },
                }}
                startIcon={<EditIcon />}
              >
                Edit This Book
              </Button>
              <Button
                disabled={!user && true}
                variant={"contained"}
                onClick={handleDelete}
                sx={{
                  backgroundColor: "#EF2853",
                  borderRadius: 0,
                  marginY: 5,
                  "&:hover": {
                    backgroundColor: "#EF2853",
                    borderColor: "#EF2853",
                    color: "white",
                  },
                }}
                endIcon={<DeleteForeverIcon />}
              >
                Delete
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Reviews:</Typography>{" "}
              <hr color="#e2e2e2" />
              <Box display={"flex"} justifyContent={"flex-end"}>
                <ReviewForm bookId={data?.data?._id} />
              </Box>
              <Box>
                {reviews &&
                  reviews.data?.map((review: IComment) => (
                    <>
                      <ReviewCard
                        key={review.fullName}
                        imageUrl={`/assets/user.png`}
                        name={review.fullName}
                        feedback={review.feedback}
                      />
                    </>
                  ))}
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default BookDetailsPage;
