import { Box, Container, Grid, Typography } from "@mui/material";
const Footer = () => {
  return (
    <div style={{ borderTop: "1px solid #e2e2e2", backgroundColor: "#FFF6F6" }}>
      <Container sx={{ paddingY: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box display={"flex"}>
              {" "}
              <img src="/assets/logo.png" alt="" width={"30px"} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: 2,
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                WISEYBOOK
              </Typography>
            </Box>

            <Typography variant="body2" paddingY={2}>
              1418 River Drive, Suite 35 Cottonhall, <br />
              CA 9622 United States
            </Typography>
            <Typography variant="body2" paddingY={2}>
              ©2023 WISEY BOOKS. All rights reserved
            </Typography>
          </Grid>
          <Grid item display={"flex"} justifyContent={"center"} xs={12} md={4}>
            <Box>
              <Typography variant="subtitle2">Explore</Typography>
              <p>Join with us</p>
              <p>Explore Books</p>
              <p>Add New Books</p>
              <p>Give your feedback</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="/assets/footer.png" alt="" width={"200px"} />
            <Typography
              variant="subtitle2"
              color={"#beb4b4"}
              textTransform={"uppercase"}
            >
              Explore our most reading book
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
