import React, {useCallback, useState} from 'react';
import {TargetBox} from './TargetBox';
import {Button} from "@material-ui/core";
import axios from 'axios'
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {placeCoins, placeWorkType, sendThemeInformation} from "../../Redux/Actions";
import {connect} from "react-redux";

const url = "http://hw.hitmarker.pro/api/upload"

const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};


const Container = (props) => {

    const [droppedFiles, setDroppedFiles] = useState('');

    const handleServerUpload = async () => {
        const lesson = props.state.data
        const form = new FormData()
        form.append('hw', droppedFiles[0])
        form.append('user', JSON.stringify(lesson))
        await axios.post(url, form, config)
            .then(res => {
                console.log(res.data.secureURL)
            })
    }

    const handleFileDrop = useCallback((item, monitor) => {
        if (monitor) {
            const files = monitor.getItem().files;
            setDroppedFiles(files);
        }
    }, []);
    return (<>
        <TargetBox onDrop={handleFileDrop}/>
        <Button
            onClick={handleServerUpload}
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