import { Button, Typography } from "@mui/material";
import { Send, Settings } from "@mui/icons-material";
import styled from "@emotion/styled";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "teal",
    color: "#fff",
    "&:hover": {
      backgroundColor: "green",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  const YellowButton = styled(Button)({
    backgroundColor: "yellow",
    color: "#fff",
    "&:hover": {
      backgroundColor: "pink",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <div>
      <h1>React Material UI</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success" size="large">
        Contained
      </Button>
      <Button variant="outlined" startIcon={<Settings />}>
        Settings
      </Button>
      <Button variant="outlined" color="secondary" endIcon={<Send />}>
        Add Post
      </Button>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <Typography variant="h2" component="h2">
        h1. Heading
      </Typography>
      <BlueButton>My Styled BlueButton</BlueButton>
      <YellowButton>Yellow Button</YellowButton>
    </div>
  );
}

export default App;
