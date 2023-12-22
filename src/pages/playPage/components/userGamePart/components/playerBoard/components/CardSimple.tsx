import { Card, CardActionArea, CardContent, CardMedia, Divider, ListItem, Stack, Typography } from "@mui/material"
import { memo } from "react";
import { CardType } from "~/type/card";

export const CardSimple = memo(({ card, state }: { card?: CardType, state?: "ALIVE" | "DEAD" }) => {

    if (!card) return null

    return (
        <Card sx={{
            width: 150,
            bgcolor: state ? state === "ALIVE" ? "lawngreen" : "orange" : "lightgray",
            boxShadow: 2,
            borderRadius: 2,
            margin: 1
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={card.imgUrl}
                    alt="card.imagename"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
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
                    <Divider orientation="horizontal" flexItem />
                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        alignItems="center"
                        divider={<Divider orientation="horizontal" flexItem />}
                    >
                        <ListItem disablePadding>HP:  {Math.round(Number(card.hp))}</ListItem>
                        <ListItem disablePadding>ATK: {Math.round(Number(card.attack))}</ListItem>
                        <ListItem disablePadding>DEF: {Math.round(Number(card.defence))}</ListItem>
                        <ListItem disablePadding>EGY: {Math.round(Number(card.energy))}</ListItem>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
})
