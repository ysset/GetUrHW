import React, {useCallback, useState} from 'react';
import {TargetBox} from './TargetBox';
import {FileList} from './FileList';
import {Button} from "@material-ui/core";
import axios from 'axios'
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {placeCoins, placeWorkType, sendThemeInformation} from "../../Redux/Actions";
import {connect} from "react-redux";

const url = "https://pk.hitmarker.pro/api/createAndUpload"

const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};


const Container = (props) => {

    const handleServerUpload = async droppedFiles => {
        const lesson = props.state.data
        console.log('here')
        const form = new FormData()
        form.append('cover', droppedFiles)
        form.append('lesson', lesson)
        await axios.post(url, form, config)
            .then(res => {
                console.log(res.data.secureURL)
            })
    }

    const [droppedFiles, setDroppedFiles] = useState([]);
    const handleFileDrop = useCallback((item, monitor) => {
        if (monitor) {
            const files = monitor.getItem().files;
            setDroppedFiles(files);
        }
    }, []);
    console.log(droppedFiles)
    return (<>
        <TargetBox onDrop={handleFileDrop}/>
        <FileList files={droppedFiles}/>
        <Button
            onClick={() => handleServerUpload(droppedFiles)}
            variant={"contained"}
            color={"primary"}
        >
            Загругизть
        </Button>
    </>);
};


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
)(Container);