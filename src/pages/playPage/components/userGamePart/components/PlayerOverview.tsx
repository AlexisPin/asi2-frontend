import { Avatar, Box, Card, CardContent, Grid, LinearProgress, ListItem, Typography } from "@mui/material";
import { PlayerDto } from "~/type/socket";

export const PlayerOverview = ({ user }: { user: PlayerDto }) => {

    console.log({ PlayerOverview: user })

    return (
        <Card sx={{ maxWidth: 350, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CardContent>
                <Avatar alt={user.name} src="/static/ressources/images/samoyede.png" sx={{ width: "128px", height: "128px" }} />
                <br />
                <Typography>
                    Player Name : {user.name}
                </Typography>
                <br />
                <Typography>
                    Action Points :
                </Typography>
                <ListItem disablePadding>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <Grid container spacing={1} >
                            <Grid xs item>
                                <LinearProgress variant="determinate" value={user.pa * 10} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                        <Typography variant="body2" color="text.secondary">
                            {user.pa}
                        </Typography>
                    </Box>
                </ListItem>
            </CardContent>
        </Card>
    )
}
