import * as React from 'react';
import { useState, useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import theme from '../../style/MuiTheme';
import { styled } from 'styled-components';
import axios from 'axios';
import TopBar from '../../components/TopBar';
import { Button, Typography, Input } from '@mui/joy';
import { useNavigate } from 'react-router-dom';


export default function AddCatPage() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [errorDisplay, setErrorDisplay] = useState('none');

    const addcat = (e) => {
        e.preventDefault();
        const req = axios.post(
            '/api/cat',
            { 'cat_name': name, 'available': true, 'breed_id': 1, 'male': true, 'birthday': null, 'description': description, 'image_url': image },
            { withCredentials: true });
        req
            .then((res) => { navigate('/mycats') })
            .catch((err) => { setErrorDisplay('block') });
    }

    return (
        <CssVarsProvider theme={theme}>

            <TopBar />

            <HomePageDiv>

                <form onSubmit={addcat}>
                    <Typography
                        level='body-sm'
                        sx={{ mb: 1, display: errorDisplay }}
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
                        name="image"
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                    <Input sx={{ mt: 1 }}
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Button sx={{ mt: 3, width: '1' }} type="submit">
                        Add cat
                    </Button>
                </form>

            </HomePageDiv>

        </CssVarsProvider >
    );
}

const HomePageDiv = styled.div`
    margin-top: 50px;
    padding-top: 24px;
    background-color: #F5F7FA;
    height: calc(100vh - 74px);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
`