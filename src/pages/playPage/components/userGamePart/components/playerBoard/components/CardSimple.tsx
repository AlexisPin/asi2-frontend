import { Card, CardActionArea, CardContent, CardMedia, ListItem, Stack, Typography } from "@mui/material"

export const CardSimple = () => {

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/card.image.jpg"
                    alt="card.image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        card.name
                    </Typography>
                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <ListItem disablePadding>ATK: 10</ListItem>
                        <ListItem disablePadding>DEF: 10</ListItem>
                        <ListItem disablePadding>EGY: 10</ListItem>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}