import { Button, Divider, Stack } from "@mui/material";
import {ShoppingCart, LocalAtm, VideogameAsset} from '@mui/icons-material';
import { useNavigate } from "react-router";



export const Menu = () => {

    const navigate = useNavigate();

    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            spacing={2}
            divider={<Divider orientation="horizontal" flexItem />}
            maxWidth={"300px"}
            marginTop={"10px"}
        >
            <Button
                size={"large"}
                onClick={() => {
                    navigate("/buy");
                }}
                startIcon={<ShoppingCart/>}
            >
                Buy
            </Button>
            <Button
                size={"large"}
                onClick={() => {
                    navigate("/sell");
                }}
                startIcon={<LocalAtm />}
            >
                Sell
            </Button>
            <Button
                size={"large"}
                onClick={() => {
                    navigate("/play");
                }}
                startIcon={<VideogameAsset />}
            >
                Play
            </Button>
        </Stack>
    )
}

// return "Mon tomodachi Jardin Ilaplu !"