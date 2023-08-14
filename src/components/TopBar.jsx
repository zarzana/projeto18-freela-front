import { Link, Sheet, Typography } from "@mui/joy"
import { styled } from "styled-components";
import Drawer from "./Drawer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TopBar() {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    return (

        <Sheet sx={{
            display: 'flex',
            position: 'fixed',
            top: 0,
            left: 0,
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            boxShadow: 'md',
            zIndex: 1,
        }}>

            <IconDiv onClick={() => setOpen(true)}>
                <ion-icon name="menu"></ion-icon>
            </IconDiv>

            <Typography level="h1" sx={{
                fontFamily: 'Kaushan Script',
                fontSize: 28,
                mt: '6px',
                ml: 1,
            }}>
                Catwalk.
            </Typography>

            <Drawer
                title="Drawer Title"
                position="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                {/* <Typography>Profile</Typography> */}
                <Typography><Link href={'/login'}>Log In</Link></Typography>
                <Typography><Link href={'/'}>Browse</Link></Typography>
                <Typography><Link href={'/mycats'}>My Cats</Link></Typography>
                <Typography onClick={() => {
                    const req = axios.post('/api/auth/logout', { withCredentials: true });
                    req.then((res) => { }).catch((err) => { });
                }}><Link href={'/'}>Log Out</Link></Typography>
            </Drawer>

        </Sheet >
    )

}

const IconDiv = styled.div`
    margin-top: 9px;
    margin-left: 9px;
    ion-icon {
        font-size: 32px;
        --ionicon-stroke-width: 25;
    }
`