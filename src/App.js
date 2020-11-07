import React from "react";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import {BrowserRouter, Switch} from "react-router-dom";

import Routers from "./Components/Routers/Routers";

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

  return (
      <>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <BrowserRouter>
                  <Switch>
                      <Routers/>
                  </Switch>
              </BrowserRouter>
          </ThemeProvider>
      </>
  );
}

export default App;
