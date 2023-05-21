import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import axios from "axios";
import {COMMANDANT_LOGIN_URL} from "../constants";
import { useNavigate  } from 'react-router-dom';
import "../styles/login.css"
import ErrorMessage from "./ErrorMessage";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleLogin = () => {
        axios.post(COMMANDANT_LOGIN_URL, {username: username, password: password})
            .then(result => {
                const token = result.data.body.token;
                localStorage.setItem("token", token);
                history("/")
            })
            .catch(error => {
                console.log(error)
                setError('Invalid username or password');
                setTimeout(() => {
                    setError(null)
                }, 3000)
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <Form error={!!error}>
                <Form.Input
                    label="Username"
                    placeholder="Введіть ім'я"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Input
                    label="Password"
                    placeholder="Введіть пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <ErrorMessage message={"Неправильні дані!"} onDismiss={() => setError(null)}></ErrorMessage>
                )}
                <Button primary onClick={handleLogin}>Увійти</Button>
            </Form>
        </div>
    );
};

export default Login;
