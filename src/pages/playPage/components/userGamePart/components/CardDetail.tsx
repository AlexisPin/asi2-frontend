import { Card, CardActionArea, CardContent, CardMedia, ListItem, Stack, Typography } from "@mui/material"
import { CardType } from "~/type/card";

export const CardDetail = ({card}: {card?: CardType}) => {

    if (!card) return null

    return (
        <Card sx={{ width: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={card.imgUrl}
                    alt="card.imagename"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" marginBottom={"0"}>
                        {card.name}
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <ListItem disablePadding>Family:  {card.family}</ListItem>
                        <ListItem disablePadding>Affinity: {card.affinity}</ListItem>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <ListItem disablePadding>HP:  {Math.round(Number(card.hp))}</ListItem>
                        <ListItem disablePadding>ATK: {Math.round(Number(card.attack))}</ListItem>
                        <ListItem disablePadding>DEF: {Math.round(Number(card.defence))}</ListItem>
                        <ListItem disablePadding>EGY: {Math.round(Number(card.energy))}</ListItem>
                    </Stack>
                    <Typography gutterBottom variant="body1" component="div" marginTop={"0.35em"}>
                        Description
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {card.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}