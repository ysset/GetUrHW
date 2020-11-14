import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Container, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {placeCoins, placeWorkType, sendThemeInformation} from '../../Redux/Actions'

import redBoyPhoto from '../photo/qE_EbxLyfSI.jpg'


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
    const coins = props.state.coins;
    const [open, setOpen] = React.useState(false);
    let [sendOrGetHW, setSendOrGetHW] = React.useState('')
    let [lowCoins, setLowCoins] = React.useState(false)
    let [whatLesson, setWhatLesson] = React.useState([])
    let [work, setWork] = React.useState('')

    const handleSendToPropsThemeInfo = (lesson) => {
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
        console.log(work)
        setWork(work)
        props.placeWorkType(work)
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
        'Сдать 作业',
        'Получить 作业',
        'Сдать 章节',
        'Получить 章节',
        'Сдать 考试',
        'Получить 考试',
    ]

    // {
    //     lessonName: '国际财务管理',
    //         id: 1,
    //     themeName: [
    //     'hui',
    //     'hui2',
    //     'hui3',
    // ],
    //     costHW: 20,
    //     costClassWork: 20,
    //     costTest: 50
    // },

    const stateOfLessons = [
        {
            lessonName: '国际财务管理'
        },
        {
            lessonName: '国际经济学'
        },
        {
            lessonName: '国际商务文书'
        },
        {
            lessonName: '外经贸文献选读'
        },
        {
            lessonName: '网络营销'
        },
        {
            lessonName: '国际贸易实务'
        },
        {
            lessonName: '物流与供应链管理'
        },
        {
            lessonName: '剑桥商务英语2020'
        },
        {
            lessonName: '国际市场营销'
        },
        {
            lessonName: '中级微观经济学'
        },
        {
            lessonName: '大学计算机基础'
        },
        {
            lessonName: '中国概况'
        },
        {
            lessonName: '高等数学'
        },
        {
            lessonName: '大学汉语5'
        },
    ]
    console.log(props.state.themes)

    return (
        <>

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
                                        {props.state.themes !== undefined && props.state.themes.map(theme => {
                                            console.log(whatLesson)
                                            if(theme.lessonName === whatLesson.lessonName && theme.hwStatus !== 'Pending')
                                            return (
                                                <Button
                                                    onClick={() => handleCheckCost(whatLesson)}
                                                >
                                                    {theme.themeName}
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
                                            backgroundImage: redBoyPhoto,
                                        }}
                                    >
                                        <h1 style={{
                                            textAlign: "center"
                                        }}>
                                            Не хватает монет
                                        </h1>
                                        <Button>
                                            <h2>
                                                Пополнить кошелёк?
                                            </h2>
                                        </Button>
                                        <Button
                                            onClick={handleClose}
                                        >
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
                                    {props.state.themes !== undefined && props.state.themes.map(theme => {
                                        console.log(whatLesson)
                                        if(theme.lessonName === whatLesson.lessonName && theme.themeType === work)
                                            return (
                                                <Button
                                                    onClick={() => {
                                                        handleSendToPropsThemeInfo({
                                                            Lesson: whatLesson,
                                                            theme: theme
                                                        })
                                                    }}
                                                >
                                                    <NavLink
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            textDecoration: 'none',
                                                            color: '#fff'
                                                        }}
                                                        to={'/sendTaskForm'}
                                                    >
                                                        {theme.themeName}
                                                    </NavLink>
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
                                borderRadius: 10
                            }}
                            src={redBoyPhoto}
                            alt={'Фото рекламы'}
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
    sendThemeInformation: (e) => dispatch(sendThemeInformation(e)),
    placeWorkType: (e) => dispatch(placeWorkType(e)),
    placeCoins: (e) => dispatch(placeCoins(e))
    //any async func :)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainApp);