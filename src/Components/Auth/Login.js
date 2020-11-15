import React from "react";
import {Button, Container, Grid, Input} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {getState} from "../../Redux/Reducer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function Login() {

    const handleLoginVK = () => {
        window.open("http://hw.hitmarker.pro/api/users/vkontakte", "_self")
    }

    return (
        <>
            <Container>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                >
                    <p style={{
                        fontSize: "250%",
                        fontsSize: "11pt",
                    }}>
                        Авторизация
                    </p>

                    <Input
                        style={{
                            width: 300,
                            margin: 10
                        }}
                        placeholder={"Введите адрес эл. почты"}
                        required
                    />

                    <Input
                        style={{
                            width: 300,
                            margin: 10
                        }}
                        placeholder={"Введите пароль"}
                        required
                    />
                    <Grid
                        container
                        direction={"row-reverse"}
                        justify={"space-around"}
                    >
                        <Button
                            style={{
                                marginTop: 50,
                                marginRight: 215
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Войти
                        </Button>

                        <Button
                            style={{
                                marginTop: 50,
                                marginLeft: 250
                            }}
                            variant={"outlined"}
                            color="secondary"
                        >
                            <NavLink
                                to={'/reg'}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            > Регистрация </NavLink>
                        </Button>

                    </Grid>
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
)(Login);