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
                        fontSamily: 'Times New Roman',
                        fontSize: "250%",
                        fontFamily: "Verdana",
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
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}
                            > Sign in </NavLink>
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
                            Authenticated
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}