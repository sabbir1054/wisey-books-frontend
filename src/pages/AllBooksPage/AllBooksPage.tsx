import { Box, Container, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import CustomPagination from "../../Components/CustomPagination/CustomePagination";
import SearchAndFilter from "../../Components/SearchAndFilter/SearchAndFilter";
import SingleBookCard from "../../Components/SingleBookCard/SingleBookCard";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import { IBook } from "../../types/book";
const AllBooksPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const { data, isLoading, error } = useGetBooksQuery({
    page: currentPage,
    search: search,
    genre: genre,
    year: year,
  });
  // total page count

  let totalPages = 10;
  if (data?.meta?.total % 10 === 0) {
    totalPages = data?.meta?.total / 10;
  } else {
    totalPages = Math.trunc(data?.meta?.total / 10) + 1;
  }

  const handleSearchBtn = () => {
    setSearch(searchTerm);
  };

  // console.log(year, genre);

  return (
    <div style={{ paddingBottom: "5vh" }}>
      <Container>
        {" "}
        <SearchAndFilter
          handleSearchBtn={handleSearchBtn}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          genre={genre}
          setGenre={setGenre}
          year={year}
          setYear={setYear}
        />
      </Container>

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
