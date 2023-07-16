import { Box, Container, Grid, Typography } from "@mui/material";
const FeaturedCategories = () => {
  return (
    <div>
      <Container sx={{ marginY: 8 }}>
        <Typography variant="h5" marginBottom={2}>
          Featured Categories
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: "#faf1ff",
                padding: "5vh",
                "&:hover": { cursor: "Pointer" },
              }}
            >
              <Typography variant="subtitle1">Romance</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: "#FAF4EB",
                padding: "5vh",
                "&:hover": { cursor: "Pointer" },
              }}
            >
              <Typography variant="subtitle1">Science Fiction</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: "#F4E6E5",
                padding: "5vh",
                "&:hover": { cursor: "Pointer" },
              }}
            >
              <Typography variant="subtitle1">Mystery</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: "#E6F2F4",
                padding: "5vh",
                "&:hover": { cursor: "Pointer" },
              }}
            >
              <Typography variant="subtitle1">Fantasy</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FeaturedCategories;
