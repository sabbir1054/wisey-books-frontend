import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../redux/features/books/bookApi";
import { IBook } from "../../types/book";

const updateErrorMessage = () => toast.error("Book not updated !");
const updateSuccessMessage = () => toast.success("Successfully Book updated !");

const UpdateBookPage = () => {
  const [
    updateBook,
    { data: updateData, isLoading: updateLoading, error: updateError },
  ] = useUpdateBookMutation();

    const params = useParams();
    const navigate = useNavigate();
  const { data, isLoading, error } = useGetSingleBookQuery(params?.id);
  const book = data?.data;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (bookUpdatedData: IBook): void => {
    updateBook({ id: params.id, data: bookUpdatedData });
  };

  useEffect(() => {
    if (updateError) {
      updateErrorMessage();
    }

    if (updateData) {
        updateSuccessMessage();
        navigate(`/books/${params.id}`)
    }
  }, [updateData, updateError]);

  return (
    <div>
      <Container maxWidth="sm" sx={{ paddingY: 10 }}>
        <Typography variant="h4" textAlign={"center"} paddingY={2}>
          Update Your Book
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                defaultValue={book?.title}
                fullWidth
                label="Title"
                {...register("title", { required: "Title is required" })}
                error={!!errors.title}
                //   helperText={errors.title?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                defaultValue={book?.author}
                fullWidth
                label="Author"
                {...register("author", { required: "Author is required" })}
                error={!!errors.author}
                //   helperText={errors.author?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                defaultValue={book?.genre}
                fullWidth
                label="Genre"
                {...register("genre", { required: "Genre is required" })}
                error={!!errors.genre}
                //   helperText={errors.genre?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                defaultValue={book?.publicationDate}
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
                defaultValue={book?.imgUrl}
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
                Update Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default UpdateBookPage;
