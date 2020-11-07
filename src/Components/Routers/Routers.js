import React from "react";
import {Route} from "react-router-dom";
import HeaderAppBar from "../AppBar/AppBar";

export default function Routes() {
    return(
        <>
            <Route>
                <Route exact location={'/'} component={HeaderAppBar}/>
            </Route>
        </>
    )
}