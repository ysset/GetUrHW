import React from "react";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

export default function Reg() {

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
                        Регистрация
                    </p>
                    <Input
                        style={{
                            width: 300,
                            margin: 10
                        }}
                        placeholder={"Введите пользователя"}
                        required
                    />
                    <Input
                        style={{
                            width: 300,
                            margin: 10
                        }}
                        type={"email"}
                        placeholder={"Введите адресс эл. почты"}
                        required
                    />
                    <Input
                        style={{
                            width: 300,
                            margin: 10
                        }}
                        type={"password"}
                        placeholder={"Введите пароль"}
                        required
                    />
                    <Input
                        style={{
                            width: 300,
                            margin: 10
                        }}
                        type={"password"}
                        placeholder={"Введите пороль ещё раз"}
                        required
                    />

                </Grid>
                <Grid
                    container
                    direction={'row'}
                    justify={"space-between"}
                    alignItems="center"
                >
                    <Grid
                        item
                    >
                        <Button
                            style={{
                                marginTop: 50,
                                marginLeft: 250
                            }}
                            variant="outlined"
                            color="secondary"
                        >
                            <NavLink
                                to={'/auth'}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            > Войти </NavLink>
                        </Button>
                    </Grid>
                    <Grid
                        item
                    >
                        <Button
                            style={{
                                marginTop: 50,
                                marginRight: 250
                            }}
                            variant={"contained"}
                            color="primary"
                        >
                            Регистрация
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}