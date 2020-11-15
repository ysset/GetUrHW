import React from "react";
import App from './App'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

export default function AppDarkTheme() {
    let system =  navigator.platform.slice(0,5);
    let color = 'dark';
    if (system === 'Linux') color = 'light';
    let prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${color})`);
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                 <App/>
            </ThemeProvider>
        </>
    )
}