import { Button, Stack } from "@mui/material"

export const ActionButtons = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingLeft: "100px", paddingRight: "100px" }}
        >
            <Button
                onClick={() => { alert("Ending Turn..."); }}
                variant="contained"
                sx={ { paddingTop: "11px" } }
            >
                End Turn
            </Button>

            <Button
                onClick={() => { alert("Attacking !"); }}
                variant="contained"
                sx={ { paddingTop: "11px" } }
            >
                Attack
            </Button>
        </Stack>
    )
}