import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Container, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import photoRizhego from '../photo/p_tlubNzuBI.jpg'

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
    navLink: {

    },
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

export default function HeaderAppBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const state = [
        '国际财务管理',
        '国际经济学',
        '国际商务文书',
        '外经贸文献选读',
        '网络营销',
        '国际贸易实务',
        '物流与供应链管理',
        '剑桥商务英语2020',
        '国际市场营销',
        '中级微观经济学',
        '大学计算机基础',
        '中国概况',
        '高等数学',
        '大学汉语5',
    ]

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Домаха.Есть
                        </Typography>
                        <Button color="inherit">Login</Button>
                        <Button variant={"contained"}>Кошелёк: 00</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Container>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Transition modal</h2>
                            <p id="transition-modal-description">react-transition-group animates me.</p>
                        </div>
                    </Fade>
                </Modal>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid
                        item
                    >
                        <Grid
                            container
                            direction="column"
                            justify="space-around"
                            alignItems="flex-start"
                        >
                            {state.map(lesson => {
                                return(
                                    <Button
                                        className={classes.button}
                                        variant={"contained"}
                                        onClick={handleOpen}
                                    >
                                        <NavLink
                                            style={{
                                                color: '#000',
                                                textDecoration: 'none'
                                            }}
                                            to={'/'}>{lesson}</NavLink>
                                    </Button>
                                )
                            })}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                    >
                        <img
                            style={{
                                width: 500,
                                height: 575,
                            }}
                            src={photoRizhego}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}