import React from "react";
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class AdminBar extends React.Component {
    render() {
        return(
            <>
                <h1
                    style={{
                        textAlign:"center"
                    }}
                >Welcome Mr.Admin</h1>
            </>
        )
    }
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
)(AdminBar);