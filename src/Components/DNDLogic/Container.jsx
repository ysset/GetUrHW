import React from 'react';
import { useState, useCallback } from 'react';
import { TargetBox } from './TargetBox';
import { FileList } from './FileList';
import {Button} from "@material-ui/core";
import axios from 'axios'

const url = "https://pk.hitmarker.pro/api/createAndUpload"

const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};

const handleServerUpload = async droppedFiles => {
    console.log('here')
    const form = new FormData()
    form.append('cover', droppedFiles)
    await axios.post(url, form, config)
        .then(res => {
            console.log(res.data.secureURL)
        })
}

export const Container = () => {
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