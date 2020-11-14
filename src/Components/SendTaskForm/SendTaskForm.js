import React from "react";
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Container, Grid} from "@material-ui/core";
import DND from '../DNDLogic/DND'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function SendTaskForm(props) {
    console.log(props.state.data)

    return (
        <>
            <Container>
                <h2
                    style={{
                        textAlign: "center"
                    }}
                >
                    {props.state.work}: {props.state.data.Lesson.lessonName}
                </h2>
                <h2
                    style={{
                        textAlign: "center"
                    }}
                >
                    Тема: {props.state.data.theme}
                </h2>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"center"}
                    justify={"center"}
                >
                    <DndProvider
                        backend={HTML5Backend}
                    >
                        <DND/>
                    </DndProvider>
                </Grid>

            </Container>
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
)(SendTaskForm);