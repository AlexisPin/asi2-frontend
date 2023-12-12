import { AppBar, Box, Toolbar, Typography } from "@mui/material"


interface HeaderProps {
    pageName: string;
}

export const Header = ({pageName}: HeaderProps) => {

    const user = {
        id: "1",
        name: "Oskour Cognac",
        money: 100000
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            {user.money} $
                        </Typography>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            {pageName}
                        </Typography>
                        <Typography variant="h6" component="div" >
                            {user.name}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}