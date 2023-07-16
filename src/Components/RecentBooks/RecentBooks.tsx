import { Container, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import './styles.css';
import { Autoplay, Pagination } from "swiper/modules";
import SingleBookCard from "../SingleBookCard/SingleBookCard";
const RecentBooks = () => {
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
          <SwiperSlide>
            <SingleBookCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBookCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBookCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBookCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBookCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBookCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBookCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBookCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleBookCard />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default RecentBooks;
