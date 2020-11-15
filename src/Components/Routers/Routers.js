import React from "react";

import AppBar from "../AppBar/AppBar";
import SendTaskForm from "../SendTaskForm/SendTaskForm";
import Login from "../Auth/Login";
import Reg from '../Auth/Reg'
import Header from "../Header";

import {Route} from "react-router-dom";
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {placeCoins, placeWorkType, sendThemeInformation} from "../../Redux/Actions";
import {connect} from "react-redux";
import AdminBar from '../AdminBar/AdminBar'

function Routes(props) {
    return (
        <>
            <Route path={'/'} component={Header}/>
            <Route exact path={'/'} component={AppBar}/>
            {/*<Route exact path={'/auth'} component={Login}/>*/}
            {/*<Route exact path={'/reg'} component={Reg}/>*/}
            <Route exact path={'/sendTaskForm'} component={SendTaskForm}/>
            <Route exact path={`/AdminTools:${props.state.userData.adminId}`} component={AdminBar}/>
        </>
    )
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
)(Routes);