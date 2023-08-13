import * as React from 'react';
import { useState } from 'react';
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


export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginErrorDisplay, setLoginErrorDisplay] = useState('none')

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        const URL = '/api/auth/login';
        const request = axios.post(URL, { 'email': email, 'password': password }, { withCredentials: true });
        request
            .then((res) => {
                navigate('/');
            })
            .catch((error) => { setLoginErrorDisplay('block') });
    }

    return (
        <CssVarsProvider theme={theme}>

            <LogInDiv>

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
                        borderRadius: 'md',
                        boxShadow: 'md',
                    }}
                >

                    <Typography level="h1" sx={{
                        textAlign: 'center',
                        mb: 1,
                        fontFamily: 'Kaushan Script',
                        fontSize: 40,
                    }}>Catwalk.</Typography>

                    <form onSubmit={login}>
                        <Typography
                            level='body-sm'
                            sx={{ mb: 1, display: loginErrorDisplay }}
                            color="danger"
                        >
                            Incorrect email or password
                        </Typography>
                        <Input
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
                        <Button sx={{ mt: 3, width: '1' }} type="submit">
                            Log in
                        </Button>
                    </form>

                    <Typography
                        endDecorator={<Link href="/signup">Sign up</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Don't have an account?
                    </Typography>


                </Sheet>

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