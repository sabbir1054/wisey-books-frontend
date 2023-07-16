import { Box, Container, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import CustomPagination from "../../Components/CustomPagination/CustomePagination";
import SearchBar from "../../Components/SearchAndFilter/SearchBar";
import SingleBookCard from "../../Components/SingleBookCard/SingleBookCard";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import { IBook } from "../../types/book";
const AllBooksPage = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  if (data) {
    console.log(data);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    console.log("New page:", newPage);
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <SearchBar />

      <Container>
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
