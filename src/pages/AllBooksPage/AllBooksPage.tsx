import { Box, Container, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import CustomPagination from "../../Components/CustomPagination/CustomePagination";
import SearchBar from "../../Components/SearchAndFilter/SearchBar";
import SingleBookCard from "../../Components/SingleBookCard/SingleBookCard";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import { IBook } from "../../types/book";
const AllBooksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const { data, isLoading, error } = useGetBooksQuery(currentPage);
  // total page count

  let totalPages = 10;
  if (data?.meta?.total % 10 === 0) {
    totalPages = data?.meta?.total / 10;
  } else {
    totalPages = Math.trunc(data?.meta?.total / 10) + 1;
  }

  return (
    <div style={{ paddingBottom: "5vh" }}>
      <SearchBar />

      <Container style={{ paddingTop: "5vh", paddingBottom: "5vh" }}>
        {isLoading && <CircularProgress disableShrink />}
        <Grid container>
          {data &&
            data?.data?.map((book: IBook) => (
              <Grid item xs={12} md={3} spacing={3} marginY={2}>
                <SingleBookCard book={book} key={book._id}></SingleBookCard>
              </Grid>
            ))}
        </Grid>
        <Box display={"flex"} justifyContent={"center"} paddingY={3}>
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </Box>
      </Container>
    </div>
  );
};

export default AllBooksPage;
