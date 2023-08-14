import * as React from 'react';
import { useState, useEffect } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import theme from '../../style/MuiTheme';
import { styled } from 'styled-components';
import axios from 'axios';
import TopBar from '../../components/TopBar';
import UserCatCard from './UserCatCard';
import { Button } from '@mui/joy';
import { useNavigate } from 'react-router-dom';


export default function MyCatsPage() {

    const navigate = useNavigate();

    const [userCats, setUserCats] = useState();

    useEffect(() => {
        const catRequest = axios.get(`/api/user/cats`);
        catRequest
            .then((catResponse) => { setUserCats(catResponse.data) })
            .catch((catError) => { console.log(catError.message) });
    }, []);

    return (
        <CssVarsProvider theme={theme}>

            <TopBar />

            <HomePageDiv>

                <Button onClick={() => { navigate('/mycats/add') }}>Add cat</Button>

                {userCats?.map(cat => (
                    <UserCatCard key={cat.cat_id} id={cat.cat_id} name={cat.cat_name} available={cat.available} image_url={cat.image_url} />
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