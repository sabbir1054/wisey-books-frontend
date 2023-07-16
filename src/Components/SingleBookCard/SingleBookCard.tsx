import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { NavLink } from "react-router-dom";
const SingleBookCard = () => {
  const book = {
    title: "Mindfulness in Motion",
    author: "Ray Bradbury",
    genre: "Dystopian",
    publicationDate: "October 19, 1953",
    reviews: [
      {
        fullName: "Mezba Vai",
        feedback:
          "Mindfulness in Motion is a transformative self-help book that encourages readers to embrace mindfulness through movement. Packed with practical exercises and insightful wisdom, it's a life-changing read.",
      },
    ],
    imgUrl: "https://i.ibb.co/TrbcD0x/freefall.jpg",
  };
  return (
    <div>
      <Card
        sx={{
          maxWidth: 200,
          border: "1px solid #f2f2f2",
          transition: "all 0.3s easy-in-out",
          "&:hover": { border: "2px solid #F8E9EC" },
        }}
        elevation={false}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://i.ibb.co/TrbcD0x/freefall.jpg"
            alt=""
            style={{ height: "200px" }}
          />
        </div>

        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              borderTop: "1px solid #e2e2e2",
            }}
          >
            <Tooltip title="Add to wishlist">
              <IconButton sx={{ color: "#F27E01" }}>
                <FavoriteBorderIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Plan to read">
              <IconButton sx={{ color: "#F27E01" }}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Mark as Done">
              <IconButton sx={{ color: "#F27E01" }}>
                <TaskAltIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              sx={{
                "&:hover": { color: "#005dc1", textDecoration: "underline" },
              }}
            >
              {book.title}
            </Typography>
          </NavLink>
          <Typography variant="body2" color="text.secondary">
            {book.publicationDate} <br />
            Author: {book.author} Genre:{book.genre}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleBookCard;
