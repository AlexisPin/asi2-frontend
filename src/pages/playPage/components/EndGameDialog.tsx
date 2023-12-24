import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { update_current_user } from '~/slices/userSlice';
import { AppState } from '~/store';
import { PlayerDto } from '~/type/socket';

export const EndGameDialog = ({
  winnerId,
  enemyPlayer,
}: {
  winnerId: number;
  enemyPlayer: PlayerDto | undefined;
}) => {
  const [open, setOpen] = useState(true);

  const user = useSelector((state: AppState) => state.user.current_user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  if (!user) {
    return null;
  }

  const handleClose = () => {
    setOpen(false);
    if (user.id === Number(winnerId)) {
      dispatch(
        update_current_user({
          ...user,
          account: user.account + 200,
        }),
      );
    }

    navigate('/');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {' '}
        {user?.id === Number(winnerId)
          ? `You won against ${enemyPlayer?.name || ''}`
          : `You lost against ${enemyPlayer?.name || ''}`}
      </DialogTitle>
      {user?.id === Number(winnerId) ? <DialogContent>You have won 200$</DialogContent> : null}
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button onClick={handleClose}> Ok </Button>
      </DialogActions>
    </Dialog>
  );
};
