import React from "react";

import MainApp from "../AppBar/AppBar";
import SendTaskForm from "../SendTaskForm/SendTaskForm";

import {Route} from "react-router-dom";

export default function Routes() {
    return(
        <>
            <Route exact path={'/'} component={MainApp}/>
            <Route exact path={'/sendTaskForm'} component={SendTaskForm}/>
        </>
    )
}