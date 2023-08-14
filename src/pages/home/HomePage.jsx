import * as React from 'react';
import { useState, useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import theme from '../../style/MuiTheme';
import { styled } from 'styled-components';
import axios from 'axios';
import CatCard from './CatCard';
import TopBar from '../../components/TopBar';


export default function HomePage() {

    const [cats, setCats] = useState();

    useEffect(() => {
        const catRequest = axios.get(('/api/cat'));
        catRequest
            .then((catResponse) => { setCats(catResponse.data) })
            .catch((catError) => { console.log(catError.message) });
    }, []);

    return (
        <CssVarsProvider theme={theme}>

            <TopBar />

            <HomePageDiv>

                {cats?.map(cat => (
                    <CatCard key={cat.cat_id} name={cat.cat_name} breed={cat.breed_name} />
                ))}

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