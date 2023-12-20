import { useState } from 'react';

import { X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { AppState } from '~/store';
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '~/type/socket';

import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { useConnectedUsers } from '../hooks/useConnectedUsers';

interface HeaderProps {
  setIsOpen: Function;
  userDiscussionId: number | null;
  setUserDiscussionId: Function;
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}

export const Header = ({
  setIsOpen,
  userDiscussionId,
  setUserDiscussionId,
  socket,
}: HeaderProps) => {
  const [userChanged, setUserChanged] = useState(false);
  const connectedUsers = useConnectedUsers(userChanged);
  const userId = useSelector((state: AppState) => state.user.current_user_id);

  let selectItem = connectedUsers.map((user) => 
      (user.id !== userId) &&
      <MenuItem value={user.id} key={user.id}>
        {user.login}
      </MenuItem>
    );

  const handleChangeDiscussion = (e: SelectChangeEvent<number | null>) => {
    if (userDiscussionId) socket.emit('leave_chat_room', userDiscussionId);
    socket.emit('join_chat_room', Number(e.target.value));
    setUserDiscussionId(e.target.value);
  };

  socket.on('notification', (e) => {
    if ((e === 'users_change')) {
      setUserChanged(true);
    }
  });

  return (
    <Box sx={{ overflow: 'auto', p: 2, borderBottom: '1px solid #bccadb', display: 'flex' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userDiscussionId}
          label="userDiscussion"
          onChange={(e) => handleChangeDiscussion(e)}
        >
          {selectItem}
        </Select>
      </FormControl>
      <IconButton
        aria-label="closeChat"
        color="primary"
        style={{
          marginLeft: '20px',
        }}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <X />
      </IconButton>
    </Box>
  );
};

export default Header;
