import React, {useCallback, useState} from 'react';

import { FileList } from './FileList';
import {TargetBox} from './TargetBox';
import {Button} from "@material-ui/core";
import axios from 'axios'
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {placeCoins, placeWorkType, sendThemeInformation} from "../../Redux/Actions";
import {connect} from "react-redux";
import {placeStatusCode} from '../../Redux/Actions'
import {Redirect} from "react-router-dom";


const url = "http://localhost:8000/upload"

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

        form.append('hw', droppedFiles[0])
        form.append('theme', JSON.stringify(theme))
        form.append('user', JSON.stringify(user))
        console.log(user)
        console.log(theme)
        console.log(droppedFiles[0])
        setSend(true)
        await axios.post(url, form, config)
            .catch(err => {
                console.log(err)
            })
    }

    const handleFileDrop = useCallback((item, monitor) => {
        if (monitor) {
            const files = monitor.getItem().files;
            setDroppedFiles(files);
        }
    }, []);
    return (
        <>

            {send === true &&  <Redirect to={'/'}/>}
            <TargetBox onDrop={handleFileDrop}/>
            <FileList files={droppedFiles}/>
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