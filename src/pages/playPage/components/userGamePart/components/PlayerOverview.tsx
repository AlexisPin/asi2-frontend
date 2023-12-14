import { Avatar, Box, Grid, LinearProgress, ListItem, Stack, Typography } from "@mui/material";



export const PlayerOverview = () => {



    return (
        <>
            <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                position={"absolute"}
            >
                <ListItem>
                    <Avatar alt="user.name" src="/static/images/avatar/user.image.jpg" />
                </ListItem>
                <ListItem>
                    Player Name : user.name
                </ListItem>
                <ListItem>
                    Action Points :
                </ListItem>
                <ListItem>
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
            </Stack>
        </>
    )
}