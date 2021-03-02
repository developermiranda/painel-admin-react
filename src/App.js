import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant="contained" color="primary">
          Fala dev
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
