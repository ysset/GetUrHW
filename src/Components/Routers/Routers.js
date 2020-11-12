import React from "react";

import AppBar from "../AppBar/AppBar";
import SendTaskForm from "../SendTaskForm/SendTaskForm";
import Login from "../Auth/Login";
import Reg from '../Auth/Reg'
import Header from "../Header";

import {Route} from "react-router-dom";

export default function Routes() {
    return (
        <>
            <Route path={'/'} component={Header}/>
            <Route exact path={'/'} component={AppBar}/>
            <Route exact path={'/auth'} component={Login}/>
            <Route exact path={'/reg'} component={Reg}/>
            <Route exact path={'/sendTaskForm'} component={SendTaskForm}/>
        </>
    )
}