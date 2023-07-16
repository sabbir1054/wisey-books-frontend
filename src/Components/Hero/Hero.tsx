import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Container, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import styles from "./Hero.module.css";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <Container sx={{ paddingY: "5vh" }}>
        <Carousel
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
        >
          <Grid
            container
            sx={{ pt: 1 }}
            spacing={5}
            display={"flex"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6} color={"black"}>
              <Typography
                variant="h6"
                textTransform={"uppercase"}
                color={`#beb4b4`}
              >
                The WISEYBOOK Editors
              </Typography>
              <Typography variant="h3">
                Featured Books of the{" "}
                <span style={{ display: "block", fontWeight: "bolder" }}>
                  February
                </span>
              </Typography>
              <NavLink to="/all-books">
                {" "}
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    marginY: 3,
                    borderRadius: 0,
                    padding: "13px 25px",
                    transition: "all 0.3s ease-in",
                    "&:hover": { color: "pink", backgroundColor: "black" },
                  }}
                >
                  Explore Books
                </Button>
              </NavLink>
            </Grid>
            <Grid item xs={12} md={6}>
              {" "}
              <img
                src="https://i.ibb.co/sbQmdk1/slide1.png"
                alt=""
                style={{ width: "80%" }}
              />{" "}
            </Grid>
          </Grid>

          <Grid container sx={{ pt: 5 }} spacing={5}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                textTransform={"uppercase"}
                color={`#beb4b4`}
              >
                BOOK CLUB
              </Typography>
              <Typography variant="h3">
                A selection with only the
                <span style={{ display: "block", fontWeight: "bolder" }}>
                  Best Book
                </span>
              </Typography>

              <NavLink to="/signup" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    marginY: 3,
                    borderRadius: 0,
                    padding: "13px 25px",
                    transition: "all 0.3s ease-in",
                    "&:hover": { color: "pink", backgroundColor: "black" },
                  }}
                >
                  Sign up
                </Button>
              </NavLink>
            </Grid>
            <Grid item xs={12} md={6}>
              {" "}
              <img
                src="https://i.ibb.co/HdSx40f/slide2.png"
                alt=""
                style={{ width: "100%" }}
              />{" "}
            </Grid>
          </Grid>
        </Carousel>
      </Container>
    </div>
  );
};

export default Hero;
