import React from "react";

import fetchData from "./Redux/fetch";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {getState} from "./Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import './App.css';
import {BrowserRouter, Switch} from "react-router-dom"

import Routers from "./Components/Routers/Routers";

const whatFetch = "users/login/success"
const winLanguage = navigator.language


function App(props) {
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

    const options = {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }

    props.fetchData(whatFetch, options)
    return (
        <>
            {winLanguage === 'ch' &&
                <>
                    <h1
                        style={{
                            textAlign: "center"
                        }}
                    >Error 404 Not found</h1>
                </>
            }
            {winLanguage !== 'ch' &&
                <BrowserRouter>
                    <Switch>
                        <ThemeProvider theme={theme}>
                            <CssBaseline/>
                            <Routers/>
                        </ThemeProvider>
                    </Switch>
                </BrowserRouter>
            }
        </>
    );
}


const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    //any async func :)
    fetchData: fetchData,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
