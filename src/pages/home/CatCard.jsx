import { Card, CardOverflow, AspectRatio, CardContent, Typography } from '@mui/joy';

export default function CatCard({name, breed, image_url}) {
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
            </CardContent>
        </Card>
    )
}