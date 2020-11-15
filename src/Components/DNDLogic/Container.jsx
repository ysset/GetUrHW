import React, {useCallback, useState} from 'react';

import {Button, Grid, Input} from "@material-ui/core";
import axios from 'axios'
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {placeStatusCode} from '../../Redux/Actions'
import {Redirect} from "react-router-dom";


const url = "http://hw.hitmarker.pro/api/upload"

const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};


const Container = (props) => {

    const [droppedFiles, setDroppedFiles] = useState([]);
    const [send, setSend] = useState(false)

    const handleServerUpload = async () => {
        console.log(props.state.chooseLesson.theme)
        const theme = props.state.chooseLesson.theme
        const user = props.state.userData
        const form = new FormData()
        try {
            form.append('hw', droppedFiles)
            form.append('theme', JSON.stringify(theme))
            form.append('user', JSON.stringify(user))
            console.log(user)
            console.log(theme)
            console.log(droppedFiles)
            setSend(true)
            await axios.post(url, form, config)
        } catch (e) {
            console.log(e)
        }
    }

    const onChangeFile = e => {
        setDroppedFiles(e.target.files[0]);
    }
    return (
        <>

            {send === true &&  <Redirect to={'/'}/>}
            <Grid
                style={{
                    backgroundColor: "#333",
                    maxWidth: 680
                }}
                container
                direction={"row"}
                alignItems={"center"}
                justify={"center"}
            >
                <Input
                    style={{
                        height: 40,
                        paddingBottom: 30
                    }}
                    type={'file'}
                    onChange={onChangeFile}
                >Добавить файл</Input>

            </Grid>
            <Button
                style={{
                    marginTop: 20
                }}
                onClick={handleServerUpload}
                variant={"contained"}
                color={"primary"}
            >
                Загругизть
            </Button>
        </>
    );
};

const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    placeStatusCode: (e) => dispatch(placeStatusCode(e))
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);