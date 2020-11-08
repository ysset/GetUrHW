import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Container, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import photoRizhego from '../photo/p_tlubNzuBI.jpg'
import {sendThemeInformation} from '../../Redux/Actions'


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

function MainApp(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let [sendOrGetHW, setSendOrGetHW] = React.useState('')
    let [coins, setCoins] = React.useState(15)
    let [lowCoins, setLowCoins] = React.useState(false)
    let [whatLesson, setWhatLesson] = React.useState([])
    let [work, setWork] = React.useState('')

    const handleSendToProps = (lesson) => {
        props.sendThemeInformation(lesson)
    }

    const handleOpen = (lesson) => {
        setOpen(true);
        setWhatLesson(lesson)
    };

    const handleClose = () => {
        setOpen(false);
        setSendOrGetHW('')
        setLowCoins(false)
    };

    const handleSendOrGetHW = (sendOrGet) => {
        setSendOrGetHW(sendOrGet)
    }

    const handleSetWork = (work) => {
        setWork(work)
    }

    const handleCheckCost = lesson => {
        if (work === 'Получить ДЗ' && lesson.costHW > coins) {
            setLowCoins(true)
        }
        if (work === 'Получить классную' && lesson.costHW > coins) {
            setLowCoins(true)
        }

    }

    const stateOfWorkType = [
        'Сдать ДЗ',
        'Получить ДЗ',
        'Сдать классную',
        'Получить классную',
        'Сдать экзамен',
        'Получить экзамен',
    ]

    const stateOfLessons = [
        {
            lessonName: '国际财务管理',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '国际经济学',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '国际商务文书',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '外经贸文献选读',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '网络营销',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '国际贸易实务',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '物流与供应链管理',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '剑桥商务英语2020',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '国际市场营销',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '中级微观经济学',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '大学计算机基础',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '中国概况',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '高等数学',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
        {
            lessonName: '大学汉语5',
            id: 1,
            themeName: [
                'hui',
                'hui2',
                'hui3',
                'hui4',
            ],
            costHW: 20,
            costClassWork: 20,
            costTest: 50
        },
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
                        <Button variant={"contained"}>Кошелёк: {coins}</Button>
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
                            {/*-------------------------------------*/}
                            {sendOrGetHW === '' &&
                            <>
                                <Grid
                                    container
                                    direction={"row"}
                                >
                                    {stateOfWorkType.map(work => {
                                        return (
                                            <>
                                                {work.slice(0, 5) === 'Сдать' ?
                                                    <Button
                                                        onClick={() => {
                                                            handleSendOrGetHW('send')
                                                            handleSetWork(work)

                                                        }}
                                                        variant={"outlined"}
                                                        style={{
                                                            marginRight: 5,
                                                            marginBottom: 5,
                                                            marginTop: 5,
                                                            width: 150,
                                                            height: 150
                                                        }}>
                                                        {work}
                                                    </Button>
                                                    : <Button
                                                        onClick={() => {
                                                            handleSendOrGetHW('get')
                                                            handleSetWork(work)
                                                        }}
                                                        variant={"outlined"}
                                                        style={{
                                                            marginRight: 5,
                                                            marginBottom: 5,
                                                            marginTop: 5,
                                                            width: 150,
                                                            height: 150
                                                        }}>
                                                        {work}
                                                    </Button>}
                                            </>

                                        )
                                    })}
                                </Grid>
                            </>
                            }
                            {/*---------------------------------------*/}
                            {sendOrGetHW === 'get' &&
                            <>
                                {lowCoins === false &&
                                <>
                                    <h2>Выбирете тему получения</h2>
                                    <Grid
                                        container
                                        direction={"column"}
                                    >
                                        {whatLesson.themeName.map(name => {
                                            return (
                                                <Button
                                                    onClick={() => handleCheckCost(whatLesson)}
                                                >
                                                    {name}
                                                </Button>
                                            )
                                        })}
                                    </Grid>
                                </>
                                }
                                {lowCoins === true &&
                                <>
                                    <Grid
                                        container
                                        direction={"column"}
                                        style={{
                                            backgroundImage: photoRizhego,
                                        }}
                                    >
                                        <h1 style={{
                                            textAlign: "center"
                                        }}>
                                            Нехватает монет
                                        </h1>
                                        <Button>
                                            <h2>
                                                Пополнить кошелёк?
                                            </h2>
                                        </Button>
                                        <Button>
                                            <h2>
                                                Сдать домаху?
                                            </h2>
                                        </Button>
                                    </Grid>

                                </>
                                }
                            </>
                            }
                            {/*---------------------------------------*/}
                            {sendOrGetHW === 'send' &&
                            <>
                                <h2>Выбирете тему сдачи</h2>
                                <Grid
                                    container
                                    direction={"column"}
                                >
                                    {whatLesson.themeName.map(name => {
                                        return (
                                            <Button
                                                onClick={() => {
                                                    handleSendToProps({
                                                        Lesson: whatLesson,
                                                        theme: name
                                                    })
                                                }}
                                            >
                                                {name}
                                            </Button>
                                        )
                                    })}
                                </Grid>
                            </>
                            }
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
                            {stateOfLessons.map(lesson => {
                                return (
                                    <Button
                                        className={classes.button}
                                        variant={"contained"}
                                        onClick={() => handleOpen(lesson)}
                                    >
                                        <NavLink
                                            style={{
                                                color: '#000',
                                                textDecoration: 'none'
                                            }}
                                            to={'/'}>{lesson.lessonName}</NavLink>
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

const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    sendThemeInformation: (e) => dispatch(sendThemeInformation(e))
    //any async func :)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainApp);