import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { useAddToWishlistMutation } from "../../redux/features/wishlist/wishlistApi";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/book";
import styles from "./SingleBookCard.module.css";
import { useGetUserUpdatedDataQuery } from "../../redux/features/user/userApi";
interface IProps {
  book: IBook;
}
const ErrorMessage = () => toast.error("Not Added!");
const SuccessMessage = () => toast.success("Successfully Added!");
const SingleBookCard = ({ book }: IProps) => {
  const { user: oldUser } = useAppSelector(state => state.user);
  const [
    addToWishlist,
    { data: wishlistData, isLoading: wishlistLoading, error: wishlistError },
  ] = useAddToWishlistMutation();
  const { data: userNewData } = useGetUserUpdatedDataQuery(oldUser?._id);
    const user=userNewData?.data

 
  
  let wishlist;
  let readSoon;
  let finished;

  if (user) {
    wishlist = user?.wishlist;
    readSoon = user?.readSoon;
    finished = user?.finishedBook;
  }

  const handleWishlist = () => {
    addToWishlist({ userId: user?._id, bookId: book?._id });
  };

  useEffect(() => {
    if (wishlistData) {
      SuccessMessage();
    }

    if (wishlistError) {
      ErrorMessage();
    }
  }, [wishlistData, wishlistError]);

  const navigate = useNavigate();

  const goToDetailsPage = () => {
    navigate(`/books/${book?._id}`);
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 200,
          border: "1px solid #f2f2f2",
          transition: "all 0.3s easy-in-out",
          "&:hover": { border: "2px solid #F8E9EC" },
        }}
        elevation={0}
      >
        <div
          className={styles.cardImg}
          style={{ display: "flex", justifyContent: "center" }}
          onClick={goToDetailsPage}
        >
          <img
            className=""
            src={`${
              book?.imgUrl
                ? book?.imgUrl
                : "https://i.ibb.co/Mft4w0h/no-image.png"
            }`}
            alt=""
            style={{ height: "200px" }}
          />
        </div>

        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              borderTop: "1px solid #e2e2e2",
            }}
          >
            <Tooltip title="Add to wishlist">
              <IconButton sx={{ color: "#F27E01" }} onClick={handleWishlist}>
                {wishlist?.includes(book?._id) ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </Tooltip>
            <Tooltip title="Plan to read">
              <IconButton sx={{ color: "#F27E01" }}>
                {readSoon?.includes(book?._id) ? <DoneIcon /> : <AddIcon />}
              </IconButton>
            </Tooltip>
            {/* <Tooltip title="Mark as Done">
              <IconButton sx={{ color: "#F27E01" }}>
                <TaskAltIcon />
              </IconButton>
            </Tooltip> */}
          </Box>

          <NavLink
            to={`/books/${book?._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              sx={{
                "&:hover": { color: "#005dc1", textDecoration: "underline" },
              }}
            >
              {book?.title}
            </Typography>
          </NavLink>
          <Typography variant="body2" color="text.secondary">
            {book?.publicationDate} <br />
            Author: {book?.author} Genre:{book?.genre}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleBookCard;
