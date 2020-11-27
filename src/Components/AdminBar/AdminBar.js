import React from "react";

import fetchData from "../../Redux/fetch";
import {placeAdminToolsInfo} from '../../Redux/Actions'
import axios from 'axios'

import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Box, Button, Container, Grid} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {makeStyles} from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import {Redirect} from "react-router-dom";


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
}))

function AdminBar (props) {

    const classes = useStyles();
    const [HW, setHW] = React.useState(false);
    const [theme, setTheme] = React.useState(false);
    const [showWorks, setShowWorks] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    const [err, setErr] = React.useState('');

    const url = `http://hw.hitmarker.pro/api/newHw:${props.state.userData.adminId}`
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

    const pathForAdminApi = {
        getAllUsers: `getUsers:${props.state.userData.adminId}`,
        createHw: `newHw:${props.state.userData.adminId}`,
        upload: 'upload',
        getAllHw: 'getHw'
    }

    const lesson = {
        cost: '',
        name : '',
        theme: '',
        themeType: '',
        completeDate: ''
    }
    const handleCostChange = e =>{
        console.log(lesson)
        lesson.cost = e.target.value
    }
    const handleNameChange = e =>{
        console.log(e)
        lesson.name = e.target.innerText
        console.log(lesson)
    }
    const handleThemeChange = e =>{
        console.log(lesson)
        lesson.theme = e.target.value
    }
    const handleThemeTypeChange = e =>{
        console.log(lesson)
        lesson.themeType = e.target.innerText
    }
    const handleCompleteDateChange = e =>{
        console.log(lesson)
        lesson.completeDate = e.target.value
    }

    const handleOpen = err => {
        setErr(err)
        setOpen(true)
    }

    const handleUploadHw = async () => {

        if (lesson.theme === '') {
            handleOpen('Заполни тему или запиши снова')
        } else if (lesson.name === '') {
            handleOpen('Выбери снова название урока или выбери название урока')
        } else if (lesson.completeDate === '') {
            handleOpen('Зполни Дату снова')
        } else if (lesson.themeType === '') {
            handleOpen('Выбери тип сдачи или выбери тип сдачи снова')
        } else {
            console.log('here')
            const form = new FormData()
            form.append('lesson', JSON.stringify(lesson))
            await axios.post(url, form, config)
            window.location.reload();
        }

    }

    const handleGetAllUsers = async () => {
        props.fetchData(pathForAdminApi.getAllUsers)
        setHW(false)
        setTheme(false)
        setShowWorks(false)
    }

    const handleGetAllHW = async () => {
        props.fetchData(pathForAdminApi.getAllHw)
        const data = {}
        props.placeAdminToolsInfo(data)
        setHW(false)
        setTheme(true)
        setShowWorks(false)
    }

    const handleAddHw = async () => {
        const data = {}
        props.placeAdminToolsInfo(data)
        console.log(props.state.toDisplayAdminTools)
        setHW(true)
        setTheme(false)
        setShowWorks(false)
    }

    const handleShowWorks = () => {
        showWorks ? setShowWorks(false) : setShowWorks(true)
    }

    const handleClose = () => {
        setOpen(false);
    };


    const stateOfLessons = [
        {
            title: '国际财务管理'
        },
        {
            title: '国际经济学'
        },
        {
            title: '国际商务文书'
        },
        {
            title: '外经贸文献选读'
        },
        {
            title: '网络营销'
        },
        {
            title: '国际贸易实务'
        },
        {
            title: '物流与供应链管理'
        },
        {
            title: '剑桥商务英语2020'
        },
        {
            title: '国际市场营销'
        },
        {
            title: '中级微观经济学'
        },
        {
            title: '大学计算机基础'
        },
        {
            title: '中国概况'
        },
        {
            title: '高等数学'
        },
        {
            title: '大学汉语5'
        },
    ]

    const stateOfWorkType = [
        {title:'Сдать 作业'},
        {title:'Сдать 章节'},
        {title:'Сдать 考试'}
    ]

    return(
        <>
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
                        <Box className={classes.paper}>
                            <h2>{err}</h2>
                            <p>{JSON.stringify(lesson)}</p>
                        </Box>
                    </Fade>
                </Modal>
            
            <Grid
                container
                direction="row"
                alignItems="center"
            >
                <Grid
                    style={{
                        width: '15%',
                        height: '93vh',
                    }}
                    item
                    container
                    direction={"column"}
                >
                    <Button
                        style={{
                            margin: 30,
                            maxWidth: 250,
                        }}
                        color={"primary"}
                        variant={"contained"}
                        onClick={handleGetAllUsers}
                    >
                        Список пользователей
                    </Button>

                    <Button
                        style={{
                            margin: 30,
                            maxWidth: 250,
                        }}
                        color={"primary"}
                        variant={"contained"}
                        onClick={handleGetAllHW}
                    >
                        Список ДЗ
                    </Button>

                    <Button
                        style={{
                            margin: 30,
                            maxWidth: 250,
                        }}
                        color={"primary"}
                        variant={"contained"}
                        onClick={handleAddHw}
                    >
                        Добавить ДЗ
                    </Button>

                </Grid>

                <Grid
                    style={{
                        width: '80%',
                        height: '93vh',
                    }}
                    item
                    container
                    direction={"row"}
                >
                    {props.state.toDisplayAdminTools.users !== undefined &&
                        props.state.toDisplayAdminTools.users.map((user, index) => {
                            console.log(user)
                            return (
                                <>
                                    <Grid
                                        style={{
                                            width:'50%'
                                        }}
                                        container
                                        direction={"column"}
                                        alignItems={"center"}
                                        key={index}
                                    >
                                        <h3>Name {user.name.familyName} {user.name.givenName}</h3>
                                        <h3>User Name {user.username}</h3>
                                        <h3>Reg Date {user.registrationDate}</h3>
                                    </Grid>
                                </>
                            )
                        })
                    }
                    {HW === true &&
                        <>
                            <Container>
                                <Grid
                                    container
                                    direction={"row"}
                                    alignItems={"center"}
                                    justify={"center"}
                                >

                                    <Grid
                                        container
                                        direction={"row"}
                                        alignItems={"center"}
                                        justify={"center"}
                                    >
                                        <Autocomplete
                                            onChange={handleNameChange}
                                            id={'stateOfLessons'}
                                            options={stateOfLessons}
                                            getOptionLabel={(option) => option.title}
                                            style={{
                                                minWidth: 200,
                                                maxWidth: 300,
                                                margin: 10
                                            }}
                                            renderInput={(params) => <TextField {...params} label="Название урока" variant="outlined" />}
                                        />

                                        <Autocomplete
                                            onChange={handleThemeTypeChange}
                                            id={'stateOfWorkType'}
                                            options={stateOfWorkType}
                                            getOptionLabel={(option) => option.title}
                                            style={{
                                                minWidth: 200,
                                                maxWidth: 300,
                                                margin: 10
                                            }}
                                            renderInput={(params) => <TextField {...params} label="Тип Сдачи" variant="outlined" />}
                                        />
                                    </Grid>

                                    <Grid
                                        style={{
                                            margin: 50,
                                            width: 500
                                        }}
                                        container
                                        direction={"column"}
                                        justify={"center"}
                                    >
                                        <Input
                                            placeholder={'Цена'}
                                            onChange={handleCostChange}
                                            type={'number'}
                                        />
                                        <Input
                                            onChange={handleThemeChange}
                                            placeholder={'Название темы'}
                                        />

                                        <Input
                                            type={'Date'}
                                            onChange={handleCompleteDateChange}
                                            placeholder={'дд.мм.гггг - deadline'}
                                        />
                                        <Button
                                            onClick={handleUploadHw}
                                            style={{
                                                margin: 20
                                            }}
                                            variant={"contained"}
                                            color={"primary"}
                                        >
                                            Загрузить
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Container>
                        </>
                    }
                    {theme && props.state.themes !== [] &&
                        props.state.themes.map((theme, index) => {
                            return(
                                <>
                                    <Grid
                                        style={{
                                            marginLeft: 20,
                                            width:'48%'
                                        }}
                                        container
                                        direction={"column"}
                                        alignItems={"center"}
                                        key={index}
                                    >
                                        <Grid
                                            style={{
                                                margin: 30,
                                                backgroundColor: "#222"
                                            }}
                                            container
                                            direction={"column"}
                                        >
                                            <h4> <p style={{color:"red"}}>Name</p> {theme.lessonName} </h4>
                                            <h4>  <p style={{color:"red"}}>Theme</p> {theme.themeName} </h4>
                                            <h4>  <p style={{color:"red"}}>Create</p> Date {theme.createDate} </h4>
                                            <h4>  <p style={{color:"red"}}>Complete</p> Date {theme.completeDate} </h4>
                                            <h4>  <p style={{color:"red"}}>Type</p> {theme.themeType} </h4>
                                            <Button
                                                color={"primary"}
                                                variant={"contained"}
                                                onClick={handleShowWorks}
                                            >
                                                Показать сданные работы
                                            </Button>

                                        </Grid>
                                        {showWorks && theme.users.map((user, index) => {
                                            return(
                                                <Grid

                                                    style={{
                                                        width: '100%'
                                                    }}
                                                    key={index}
                                                >
                                                    <h3 style={{color:"red"}}>User name</h3> {user.username}
                                                    <h3 style={{color:"red"}}>Hw path</h3> {user.hwPath}
                                                    <h3 style={{color:"red"}}>Upload Date</h3> {user.uploadDate}
                                                    <hr size={5}/>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </>
                            )
                        })

                    }
                </Grid>
            </Grid>
        </>
    )

}

const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    //any async func :)
    fetchData: fetchData,
    placeAdminToolsInfo: (e) => placeAdminToolsInfo(e)
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminBar);