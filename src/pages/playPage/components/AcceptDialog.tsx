import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { clientSocket } from "~/App";
import { AppState } from "~/store";



export const AcceptDialog = () => {
  const [open, setOpen] = useState(false);
  const [gameRoomId, setGameRoomId] = useState<string>();
  const [playerName, setPlayerName] = useState<string>();

  const user = useSelector((state: AppState) => state.user.current_user);

  useEffect(() => {
    clientSocket.on('request_game_room', (gameRoomId, name) => {
      setGameRoomId(gameRoomId);
      setPlayerName(name);
      setOpen(true);
    })
    return () => {
      clientSocket.off('request_game_room')
    }
  }, [])

  if (!user) return null

  const handleAccept = () => {
    if (gameRoomId && user) {
      clientSocket.emit('join_game_room', gameRoomId, user.id, user.login)
      setOpen(false);
    }
  }

  const handleClose = () => {
    if (gameRoomId && user) {
      //clientSocket.emit('decline_game_room', gameRoomId, user.id)
      setOpen(false);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle> {playerName} wants to play with you </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}> Decline </Button>
        <Button onClick={handleAccept}> Accept </Button>
      </DialogActions>
    </Dialog>
  )
}
