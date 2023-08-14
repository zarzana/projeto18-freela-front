import * as React from 'react';
import { useState, useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import theme from '../../style/MuiTheme';
import { styled } from 'styled-components';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from "framer-motion";


export default function SignupPage() {

    const navigate = useNavigate();

    // useEffect(() => {
    //     const refreshRequest = axios.post(('/api/auth/token'), { withCredentials: true });
    //     refreshRequest.then((refreshResponse) => { navigate('/') }).catch((refreshError) => {
    //         if (refreshError.response.status == 401) {
    //             const logoutRequest = axios.post(('/api/auth/logout'), { withCredentials: true })
    //             logoutRequest
    //                 .then((logoutResponse) => { })
    //                 .catch((logoutError) => { })
    //         }
    //     });
    // }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [signupErrorDisplay, setSignupErrorDisplay] = useState('none')

    const signup = (e) => {
        e.preventDefault();
        const signupRequest = axios.post(
            '/api/auth/signup',
            { 'name': name, 'email': email, 'password': password, 'cpf': cpf, 'phone': phone },
            { withCredentials: true });
        signupRequest
            .then((signupResponse) => {
                const loginRequest = axios.post('/api/auth/login', { 'email': email, 'password': password }, { withCredentials: true });
                loginRequest
                    .then((loginResponse) => {
                        navigate('/');
                    })
                    .catch((loginError) => { setSignupErrorDisplay('block') });
            })
            .catch((signupError) => { setSignupErrorDisplay('block') });
    }

    return (
        <CssVarsProvider theme={theme}>

            <LogInDiv>

                <motion.div
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                    }}
                    style={{ width: '100%' }}
                >

                    <Sheet
                        sx={{
                            width: '80%',
                            my: 4,
                            mx: 'auto',
                            py: 3,
                            px: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            borderRadius: 'lg',
                            boxShadow: 'md',
                        }}
                    >

                        <Typography level="h1" sx={{
                            textAlign: 'center',
                            mb: 1,
                            fontFamily: 'Kaushan Script',
                            fontSize: 40,
                        }}>Catwalk.</Typography>

                        <form onSubmit={signup}>
                            <Typography
                                level='body-sm'
                                sx={{ mb: 1, display: signupErrorDisplay }}
                                color="danger"
                            >
                                Something went wrong!
                            </Typography>
                            <Input
                                name="name"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <Input sx={{ mt: 1 }}
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Input sx={{ mt: 1 }}
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Input sx={{ mt: 1 }}
                                name="cpf"
                                type="number"
                                placeholder="CPF"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                            />
                            <Input sx={{ mt: 1 }}
                                name="phone"
                                type="number"
                                placeholder="Phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            <Button sx={{ mt: 3, width: '1' }} type="submit">
                                Sign up
                            </Button>
                        </form>

                        <Typography
                            endDecorator={<Link href="/login">Log in</Link>}
                            fontSize="sm"
                            sx={{ alignSelf: 'center' }}
                        >
                            Already have an account?
                        </Typography>


                    </Sheet>

                </motion.div>

            </LogInDiv>

        </CssVarsProvider >
    );
}

const LogInDiv = styled.div`
    background-color: #F5F7FA;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`