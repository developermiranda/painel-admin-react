import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SideBar from "./components/SideBar";
import Usuarios from "./components/Usuarios";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <SideBar />
          <Usuarios />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
