/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { allYear } from "../../utils/FilterContstant";
interface IProps {
  searchTerm: string;
  setSearchTerm: Function;
  year: string;
  setYear: Function;
  genre: string;
  setGenre: Function;
  handleSearchBtn: Function;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const genreData = [
  "Mystery",
  "Romance",
  "Fantasy",
  "Science Fiction",
  "Young Adult",
  "Historical Fiction",
  "Contemporary ",
  "Dystopian",
];

const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  year,
  setYear,
  genre,
  setGenre,
  handleSearchBtn,
}: IProps) => {
  const [open, setOpen] = useState(false);
  // filtering
  const handleYear = (event: SelectChangeEvent<typeof year>) => {
    setYear(event.target.value || "");
  };
  const handleGenre = (event: SelectChangeEvent<typeof genre>) => {
    setGenre(event.target.value || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  // searching
  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const resetFilter = () => {
    setYear("");
    setGenre("");
  };
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <TextField
          variant="standard"
          id="search"
          type="search"
          label="Search Your Books"
          value={searchTerm}
          onChange={handleChange}
          sx={{
            width: "100%",
            minWidth: "300px",
            "&:after": { borderBottom: "2px solid #D54B96" },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  sx={{ color: "#D54B96" }}
                  onClick={() => handleSearchBtn()}
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={handleClickOpen}
          sx={{ color: "#D54B96", marginTop: "10px", marginBottom: "10px" }}
          startIcon={<FilterListIcon />}
        >
          Filter
        </Button>

        <Button
          size="small"
          variant="outlined"
          disableElevation
          onClick={resetFilter}
          sx={{
            borderColor: "#D54B96",
            color: "#D54B96",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          startIcon={<ClearIcon />}
        >
          Clear Filter
        </Button>

        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>Enter you filter option</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-dialog-select-label">Genre</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={genre}
                  onChange={handleGenre}
                  input={<OutlinedInput label="Genre" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {genreData.map((singleGenre) => (
                    <MenuItem value={singleGenre}>{singleGenre}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-dialog-select-label">Year</InputLabel>
                <Select
                  labelId="demo-dialog-select-label"
                  id="demo-dialog-select"
                  value={year}
                  onChange={handleYear}
                  input={<OutlinedInput label="Year" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {allYear.map((singleYear) => (
                    <MenuItem value={singleYear}>{singleYear}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default SearchAndFilter;
