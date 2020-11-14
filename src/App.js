import React from "react";

import fetchData from "./Redux/fetch";
import CssBaseline from '@material-ui/core/CssBaseline';
import {getState} from "./Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import './App.css';
import {BrowserRouter, Switch} from "react-router-dom"

import Routers from "./Components/Routers/Routers";


const winLanguage = navigator.language


class App extends React.Component{
    options = {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }

    whatFetch = {
        loginSucces: "users/login/success",
        getAllHw: 'getHw'
    }

    componentDidMount = async () => {
        this.props.fetchData(this.whatFetch.getAllHw)
        this.props.fetchData(this.whatFetch.loginSucces, this.options)
    }

    render() {
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
                            <Routers/>
                        </Switch>
                    </BrowserRouter>
                }
            </>
        );
    }
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
