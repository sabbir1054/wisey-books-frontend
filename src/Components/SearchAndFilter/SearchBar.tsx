/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      {/* <Container maxWidth="md" sx={{ mt: 2 }}> */}
      <TextField
        variant="standard"
        id="search"
        type="search"
        label="Search Your Books"
        value={searchTerm}
        onChange={handleChange}
        sx={{
          width: "70%",
          minWidth: "300px",
          "&:after": { borderBottom: "2px solid #D54B96" },
          //   borderBottom: "1px solid #D54B96",
          //   "&:hover": { borderBottom: "1px solid blue" },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button sx={{ color: "#D54B96" }} startIcon={<SearchIcon />}>
                Search
              </Button>
            </InputAdornment>
          ),
        }}
      />
      {/* </Container> */}
    </div>
  );
};

export default SearchBar;
