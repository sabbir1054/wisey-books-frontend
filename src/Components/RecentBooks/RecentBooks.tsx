import { Container, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import { IBook } from "../../redux/features/books/bookSlice";
import SingleBookCard from "../SingleBookCard/SingleBookCard";
const RecentBooks = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  const books: IBook[] = data?.data;
  return (
    <div>
      <Container sx={{ marginY: "15vh" }}>
        <Typography variant="h5" paddingBottom={4}>
          Recently Added Books{" "}
        </Typography>
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 2500,
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {isLoading && <CircularProgress disableShrink />}

          {data &&
            books?.map((book: IBook) => (
              <SwiperSlide key={book.title}>
                <SingleBookCard book={book} key={book._id} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default RecentBooks;
