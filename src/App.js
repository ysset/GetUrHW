import React from "react";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {getState} from "./Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import './App.css';
import {BrowserRouter, Switch} from "react-router-dom"

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
            <BrowserRouter>
                <Switch>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Routers/>
                    </ThemeProvider>
                </Switch>
            </BrowserRouter>
        </>
    );
}


const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    //any async func :)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
