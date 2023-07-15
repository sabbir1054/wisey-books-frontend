import { Button, ButtonGroup } from "@mui/material";

function App() {
  const data = "July 12, 1985";
  const publicationYear = new Date(data).getFullYear();
  console.log(publicationYear);

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
}

export default App;
