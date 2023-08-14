import { Card, CardOverflow, AspectRatio, CardContent, Typography, Switch } from '@mui/joy';
import axios from 'axios';
import { useState } from 'react';

export default function UserCatCard({ id, name, available, image_url }) {

    const [checked, setChecked] = useState(available);

    return (
        <Card variant="outlined" sx={{ width: '80%', mb: 2, borderRadius: 'lg', boxShadow: 'md', zIndex: 0 }}>
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        src={image_url}
                        loading="lazy"
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="title-md">{name}</Typography>
                {/* <Typography level="body-xs">{breed}</Typography> */}
                <Switch
                    checked={checked}
                    onChange={(event) => {
                        const req = axios.patch(`/api/cat/${id}/availability`, { withCredentials: true });
                        req.then(() => { }).catch(() => { });
                        setChecked(event.target.checked);
                    }}
                />
            </CardContent>
        </Card>
    )

}