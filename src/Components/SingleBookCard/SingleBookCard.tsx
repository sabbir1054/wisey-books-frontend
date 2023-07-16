import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { NavLink } from "react-router-dom";
import { IBook } from "../../types/book"; 
interface IProps {
  book: IBook;
}
const SingleBookCard = ({ book }: IProps) => {

  return (
    <div>
      <Card
        sx={{
          maxWidth: 200,
          border: "1px solid #f2f2f2",
          transition: "all 0.3s easy-in-out",
          "&:hover": { border: "2px solid #F8E9EC", cursor: "pointer" },
        }}
        elevation={false}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={`${
              book?.imgUrl
                ? book?.imgUrl
                : "https://i.ibb.co/Mft4w0h/no-image.png"
            }`}
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
              {book?.title}
            </Typography>
          </NavLink>
          <Typography variant="body2" color="text.secondary">
            {book?.publicationDate} <br />
            Author: {book?.author} Genre:{book?.genre}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleBookCard;
