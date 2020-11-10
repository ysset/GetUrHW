import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {getState} from "../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    button: {
        marginTop: 10,
        width: 300,
    },
    navLink: {},
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header(props) {

    const classes = useStyles()

    return(
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Button>
                                <NavLink
                                    style={{
                                        color: '#fff',
                                        textDecoration: 'none',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    to={'/'}
                                >
                                    Домаха.Есть
                                </NavLink>
                            </Button>
                        </Typography>
                        <Button color="inherit">
                            <NavLink
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none'
                                }}
                                to={'/auth'}
                            >
                                Login
                            </NavLink>
                        </Button>
                        <Button variant={"contained"}>Кошелёк: {props.state.coins}</Button>
                    </Toolbar>
                </AppBar>
            </div>
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
)(Header);