import { Avatar, Box, Card, CardContent, Grid, LinearProgress, ListItem, Typography } from "@mui/material";
import { User } from "~/type/user";



export const PlayerOverview = ({user}: {user: User}) => {

    console.log({PlayerOverview: user})

    return (
        <Card sx={{ maxWidth: 350 , display: "flex", alignItems:"center", justifyContent: "center"}}>
            <CardContent>
            <Avatar alt={user.surName} src="/static/ressources/images/samoyede.png" sx={{ width: "128px", height: "128px" }}/>
            <br />
            <Typography>
                Player Name : {user.surName}
            </Typography>
            <br />
            <Typography>
                Action Points :
            </Typography>
            <ListItem disablePadding>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <Grid spacing={1} >
                        <Grid xs item>
                            <LinearProgress variant="determinate" value={80} />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">
                        {80}
                    </Typography>
                </Box>
            </ListItem>
            </CardContent>
        </Card>
    )
}