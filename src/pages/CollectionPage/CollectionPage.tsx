import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleBookCard from "../../Components/SingleBookCard/SingleBookCard";
import { useGetFinishedListQuery } from "../../redux/features/finishedList/finishedlistApi";
import { useGetReadSoonQuery } from "../../redux/features/readSoon/readSoonApi";
import { useGetWishListQuery } from "../../redux/features/wishlist/wishlistApi";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/book";

const CollectionPage = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const { data: wishlistData } = useGetWishListQuery(user?._id);
  const { data: readSoonData } = useGetReadSoonQuery(user?._id);
  const { data: finishedData } = useGetFinishedListQuery(user?._id);
  useEffect(() => {
    if (!user) {
      //   navigate("/signin");
    }
  }, [user]);

  return (
    <div>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h5" paddingY={2}>
            {" "}
            Wishlist{" "}
          </Typography>
          <Grid container>
            {wishlistData &&
              wishlistData?.data?.map((book: IBook) => (
                <Grid item xs={12} md={3} spacing={3} marginY={2}>
                  <SingleBookCard book={book} key={book._id}></SingleBookCard>
                </Grid>
              ))}
          </Grid>
          <hr />
        </Box>

        <Box paddingY={2}>
          <Typography variant="h5" paddingY={2}>
            {" "}
            Read Soon{" "}
          </Typography>
          <Grid container>
            {readSoonData &&
              readSoonData?.data?.map((book: IBook) => (
                <Grid item xs={12} md={3} spacing={3} marginY={2}>
                  <SingleBookCard book={book} key={book._id}></SingleBookCard>
                </Grid>
              ))}
          </Grid>
        </Box>

        <Box paddingY={2}>
          <Typography variant="h5" paddingY={2}>
            {" "}
            Read Finished{" "}
          </Typography>
          <Grid container>
            {finishedData &&
              finishedData?.data?.map((book: IBook) => (
                <Grid item xs={12} md={3} spacing={3} marginY={2}>
                  <SingleBookCard book={book} key={book._id}></SingleBookCard>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CollectionPage;
