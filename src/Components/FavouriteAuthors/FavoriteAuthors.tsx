import { Box, Container, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import './styles.css';
import { Autoplay, Navigation } from "swiper/modules";
const FavoriteAuthors = () => {
  const authorsData = [
    {
      imgPath: "/assets/authors/img1.jpg",
      name: "Barbara O'Neil",
      info: "25 Published Books",
    },
    {
      imgPath: "/assets/authors/img2.jpg",
      name: "Stiphen King",
      info: "20 Published Books",
    },
    {
      imgPath: "/assets/authors/img3.jpg",
      name: "Dipanker",
      info: "34 Published Books",
    },
    {
      imgPath: "/assets/authors/img4.jpg",
      name: "Shakib King",
      info: "15 Published Books",
    },
    {
      imgPath: "/assets/authors/img6.jpg",
      name: "Joe Wicks",
      info: "26Published Books",
    },
    {
      imgPath: "/assets/authors/img7.jpg",
      name: "David Williams",
      info: "20 Published Books",
    },
    {
      imgPath: "/assets/authors/img8.jpg",
      name: "Liton Dash",
      info: "20 Published Books",
    },
  ];
  return (
    <div>
      <Container sx={{ marginY: "15vh" }}>
        <Typography variant="h5" paddingBottom={4}>
          Popular Authors{" "}
        </Typography>
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 5000,
          }}
          navigation={true}
          spaceBetween={2}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {authorsData?.map((author) => (
            <SwiperSlide>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={`${author.imgPath}`}
                  alt=""
                  style={{ borderRadius: "50%" }}
                  width={"140px"}
                />
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="body2">{author.info}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default FavoriteAuthors;
