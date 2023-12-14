import { ListItem, Stack } from "@mui/material";
import { CardSimple } from "./components/CardSimple";


export const PlayerBoard = () => {



    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
            >
                <ListItem>
                    <CardSimple id={1}></CardSimple>
                </ListItem>
                <ListItem>
                    <CardSimple id={2}></CardSimple>
                </ListItem>
            </Stack>
        </>
    )
}