import { Card, CardOverflow, AspectRatio, CardContent, Typography } from '@mui/joy';

export default function CatCard({name, breed}) {
    return (
        <Card variant="outlined" sx={{ width: '80%', mb: 2, borderRadius: 'lg', boxShadow: 'md' }}>
            <CardOverflow>
                <AspectRatio ratio="2">
                    <img
                        src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                        srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="title-md">{name}</Typography>
                <Typography level="body-xs">{breed}</Typography>
            </CardContent>
        </Card>
    )
}