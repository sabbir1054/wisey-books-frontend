import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useAddBookMutation } from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/book";
const addBookErrorMessage = () => toast.error("Book not added !");
const addBookSuccessMessage = () => toast.success("Successfully Book added !");
const AddNewBookPage = () => {
  const params = useParams();
  const { user } = useAppSelector((state) => state.user);
  const [addBook, { data, isLoading, error }] = useAddBookMutation({});
  console.log(error);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (bookData: IBook): void => {
    bookData.user = user._id;
    addBook(bookData);
  };
 

  useEffect(() => {
    if (error) {
      addBookErrorMessage();
    }

    if (data) {
      addBookSuccessMessage();
      reset();
    }
  }, [data, error]);

  return (
    <div>
      <Container maxWidth="sm" sx={{ paddingY: 10 }}>
        <Typography variant="h4" textAlign={"center"} paddingY={2}>
          Add New Book
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                //   defaultValue={book?.title}
                fullWidth
                label="Title"
                {...register("title", { required: "Title is required" })}
                error={!!errors.title}
                //   helperText={errors.title?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                //   defaultValue={book?.author}
                fullWidth
                label="Author"
                {...register("author", { required: "Author is required" })}
                error={!!errors.author}
                //   helperText={errors.author?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                //   defaultValue={book?.genre}
                fullWidth
                label="Genre"
                {...register("genre", { required: "Genre is required" })}
                error={!!errors.genre}
                //   helperText={errors.genre?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                //   defaultValue={book?.publicationDate}
                fullWidth
                label="Publication Date"
                {...register("publicationDate", {
                  required: "Publication Date is required",
                })}
                error={!!errors.publicationDate}
                //   helperText={errors.publicationDate?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                //   defaultValue={book?.imgUrl}
                fullWidth
                label="Image URL"
                {...register("imgUrl")}
                error={!!errors.imgUrl}
                //   helperText={errors.imgUrl?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                //   color="primary"
                type="submit"
                sx={{
                  transition: "all 0.3s ease-in",
                  borderColor: "#EA529B",
                  color: "#EA529B",
                  borderRadius: 0,
                  marginY: 2,
                  "&:hover": {
                    backgroundColor: "#EA529B",
                    borderColor: "#EA529B",
                    color: "white",
                  },
                }}
              >
                Add Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default AddNewBookPage;
